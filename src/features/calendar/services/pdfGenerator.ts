import { calendarService } from "./calendar.service";

export async function downloadDynamicCalendarPdf(year: number = 2026) {
  try {
    const events = await calendarService.getAll();
    
    // Sort events by date ascending
    const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Group events by Month
    const monthsMap: { [monthName: string]: any[] } = {};
    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    monthNames.forEach((m) => {
      monthsMap[m] = [];
    });

    sortedEvents.forEach((ev) => {
      const dateObj = new Date(ev.date);
      const mName = monthNames[dateObj.getMonth()];
      if (monthsMap[mName]) {
        monthsMap[mName].push(ev);
      }
    });

    // Build print HTML template
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Por favor, permita popups para gerar e imprimir o PDF do calendário.");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Calendário Escolar ${year} — Colégio São Francisco de Assis</title>
        <style>
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #0f1e36;
            margin: 0;
            padding: 20px;
            background: #ffffff;
            font-size: 12px;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #0f1e36;
            padding-bottom: 15px;
            margin-bottom: 25px;
          }
          .logo-title {
            font-size: 24px;
            font-weight: 900;
            letter-spacing: 2px;
            color: #0f1e36;
          }
          .logo-subtitle {
            font-size: 11px;
            color: #44abff;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .header-right {
            text-align: right;
          }
          .doc-title {
            font-size: 18px;
            font-weight: 800;
            color: #0f1e36;
          }
          .doc-year {
            font-size: 14px;
            font-weight: bold;
            color: #44abff;
          }
          .month-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .month-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 12px 15px;
            background: #f8fafc;
            page-break-inside: avoid;
          }
          .month-title {
            font-size: 14px;
            font-weight: 800;
            color: #0f1e36;
            border-bottom: 1px solid #cbd5e1;
            padding-bottom: 6px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
          }
          .event-item {
            display: flex;
            align-items: baseline;
            gap: 8px;
            margin-bottom: 6px;
            font-size: 11px;
            line-height: 1.4;
          }
          .event-date {
            font-weight: 800;
            color: #0f1e36;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 2px 6px;
            font-size: 10px;
            white-space: nowrap;
          }
          .event-name {
            font-weight: 600;
            color: #1e293b;
          }
          .event-time {
            font-size: 10px;
            color: #64748b;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 10px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo-title">CSFA</div>
            <div class="logo-subtitle">Colégio São Francisco de Assis</div>
          </div>
          <div class="header-right">
            <div class="doc-title">CALENDÁRIO ESCOLAR OFICIAL</div>
            <div class="doc-year">Ano Letivo ${year}</div>
          </div>
        </div>

        <div class="month-grid">
          ${monthNames
            .map((m) => {
              const mEvents = monthsMap[m];
              return `
                <div class="month-card">
                  <div class="month-title">
                    <span>${m}</span>
                    <span style="font-size: 10px; color: #64748b; font-weight: normal;">${mEvents.length} evento(s)</span>
                  </div>
                  <div>
                    ${
                      mEvents.length === 0
                        ? '<div style="color: #94a3b8; font-style: italic; font-size: 10px;">Atividades letivas regulares.</div>'
                        : mEvents
                            .map((ev) => {
                              const day = new Date(ev.date).getDate().toString().padStart(2, "0");
                              return `
                                <div class="event-item">
                                  <span class="event-date">${day}/${(monthNames.indexOf(m) + 1).toString().padStart(2, "0")}</span>
                                  <div>
                                    <span class="event-name">${ev.title}</span>
                                    ${ev.time ? `<span class="event-time">(${ev.time})</span>` : ""}
                                    ${ev.description ? `<div style="font-size: 9px; color: #64748b;">${ev.description}</div>` : ""}
                                  </div>
                                </div>
                              `;
                            })
                            .join("")
                    }
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>

        <div class="footer">
          Colégio São Francisco de Assis • Documento gerado automaticamente pelo Sistema Institucional em ${new Date().toLocaleDateString("pt-BR")} às ${new Date().toLocaleTimeString("pt-BR")}. Sujeito a alterações pedagógicas.
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 500);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  } catch (error) {
    console.error("Erro ao gerar PDF do calendário:", error);
    alert("Erro ao gerar o PDF do calendário. Tente novamente.");
  }
}
