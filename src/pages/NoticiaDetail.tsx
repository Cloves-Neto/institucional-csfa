import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { blogService } from "@/features/blog/services/blog.service";
import type { BlogPost } from "@/features/blog/types/blog.types";

export const NoticiaDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      blogService.getByIdOrSlug(slug).then((data) => {
        setPost(data);
        setIsLoading(false);
      });

      blogService.getAll().then((all) => {
        setRelatedPosts(all.filter((p) => p.slug !== slug && String(p.id) !== slug).slice(0, 3));
      });
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center text-slate-400 text-sm space-y-2">
          <Icon icon="lucide:loader-2" className="animate-spin text-brand-blue w-8 h-8 mx-auto" />
          <p>Carregando matéria institucional...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm max-w-md">
          <h2 className="text-lg font-bold text-brand-navy mb-2">Notícia não encontrada</h2>
          <p className="text-xs text-slate-500 mb-6">A matéria que você procura pode ter sido removida ou não está mais disponível.</p>
          <Link
            to="/noticias"
            className="px-5 py-2.5 rounded-full bg-brand-navy text-white text-xs font-bold inline-flex items-center gap-2"
          >
            <Icon icon="lucide:arrow-left" />
            Voltar para Notícias
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-20 bg-slate-50 min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-blue transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs"
          >
            <Icon icon="lucide:arrow-left" />
            Voltar para todas as Notícias
          </Link>

          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue uppercase tracking-wider">
            {post.tag}
          </span>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy leading-tight tracking-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-200">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Icon icon="lucide:user" className="text-brand-blue" />
              {post.author || "Redação CSFA"}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Icon icon="lucide:calendar" />
              Publicado em {post.date}
            </span>
          </div>
        </div>

        {/* Featured Cover Banner */}
        {post.coverImageId && (
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 max-h-[460px] bg-slate-100">
            <img
              src={post.coverImageId}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xs">
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
            {post.content}
          </div>

          {/* Share Section */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-500">
              Compartilhe esta matéria com outros pais e alunos:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link da notícia copiado para a área de transferência!");
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Icon icon="lucide:copy" />
                Copiar Link
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 space-y-6">
            <h3 className="text-xl font-black text-brand-navy tracking-tight">
              Leia Também
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/noticias/${item.slug || item.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={item.coverImageId || "/posts/post-1-robotica.jpg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-brand-blue uppercase">{item.tag}</span>
                    <h4 className="text-xs font-bold text-brand-navy line-clamp-2 leading-snug group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};

export default NoticiaDetailPage;
