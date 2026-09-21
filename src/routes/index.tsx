import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/Home';
import EducacaoInfantil from '@/pages/EducacaoInfantil';
import EnsinoFundamental1 from '@/pages/EnsinoFundamental1';
import EnsinoFundamental2 from '@/pages/EnsinoFundamental2';
import EnsinoMedio from '@/pages/EnsinoMedio';
import EnsinoPolivalente from '@/pages/EnsinoPolivalente';
import Extracurriculares from '@/pages/Extracurriculares';
import TecnologiaEducacional from '@/pages/TecnologiaEducacional';
import Matriculas from '@/pages/Matriculas';
import Contato from '@/pages/Contato';
import Sobre from '@/pages/Sobre';
import PropostaPedagogica from '@/pages/PropostaPedagogica';
import SistemaEduc from '@/pages/SistemaEduc';
import PortalSas from '@/pages/PortalSas';
import CalendarioEscolar from '@/pages/CalendarioEscolar';
import ListaMateriais from '@/pages/ListaMateriais';
import Biblioteca from '@/pages/Biblioteca';
import Magazine from '@/pages/Magazine';
import Noticias from '@/pages/Noticias';
import NoticiaDetail from '@/pages/NoticiaDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'educacao-infantil',
        element: <EducacaoInfantil />,
      },
      {
        path: 'ensino-fundamental-1',
        element: <EnsinoFundamental1 />,
      },
      {
        path: 'ensino-fundamental-2',
        element: <EnsinoFundamental2 />,
      },
      {
        path: 'ensino-medio',
        element: <EnsinoMedio />,
      },
      {
        path: 'ensino-polivalente',
        element: <EnsinoPolivalente />,
      },
      {
        path: 'extracurriculares',
        element: <Extracurriculares />,
      },
      {
        path: 'tecnologia-educacional',
        element: <TecnologiaEducacional />,
      },
      {
        path: 'matriculas',
        element: <Matriculas />,
      },
      {
        path: 'contato',
        element: <Contato />,
      },
      {
        path: 'sobre',
        element: <Sobre />,
      },
      {
        path: 'proposta-pedagogica',
        element: <PropostaPedagogica />,
      },
      {
        path: 'sistema-educacional',
        element: <SistemaEduc />,
      },
      {
        path: 'portal-sas',
        element: <PortalSas />,
      },
      {
        path: 'calendario-escolar',
        element: <CalendarioEscolar />,
      },
      {
        path: 'lista-de-materiais',
        element: <ListaMateriais />,
      },
      {
        path: 'biblioteca',
        element: <Biblioteca />,
      },
      {
        path: 'magazine',
        element: <Magazine />,
      },
      {
        path: 'noticias',
        element: <Noticias />,
      },
      {
        path: 'noticias/:slug',
        element: <NoticiaDetail />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
