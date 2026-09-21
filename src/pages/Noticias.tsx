import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { blogService } from "@/features/blog/services/blog.service";
import type { BlogPost } from "@/features/blog/types/blog.types";

export const NoticiasPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("TODAS");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [tags, setTags] = useState<string[]>(["TODAS"]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    Promise.all([
      blogService.getAll(),
      blogService.getTags(),
    ]).then(([postsData, tagsData]) => {
      setPosts(postsData);
      const postTags = postsData.map((p) => p.tag).filter(Boolean);
      const combinedTags = Array.from(new Set(["TODAS", ...tagsData, ...postTags]));
      setTags(combinedTags);
      setIsLoading(false);
    });
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesTag = selectedTag === "TODAS" || post.tag === selectedTag;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue uppercase tracking-wider">
            <Icon icon="lucide:newspaper" />
            Notícias & Acontecimentos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Fique por dentro de tudo o que acontece no CSFA
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Acompanhe nossas conquistas pedagógicas, eventos esportivos, comunicados e projetos acadêmicos em um só lugar.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-xs border border-slate-100">
          {/* Tags */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTag === t
                    ? "bg-brand-navy text-white shadow-md shadow-brand-navy/15"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Icon icon="lucide:search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar notícia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-brand-navy"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="py-24 text-center text-slate-400 text-sm">Carregando notícias do colégio...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-4">
            <Icon icon="lucide:newspaper" className="w-12 h-12 text-slate-300" />
            <h3 className="text-base text-slate-500 max-w-xl">
              Acompanhe nossas redes sociais. Novos eventos e notícias serão publicados em breve.
            </h3>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Post (Destaque) */}
            {featuredPost && (
              <Link
                to={`/noticias/${featuredPost.slug || featuredPost.id}`}
                className="group block bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 h-64 sm:h-80 lg:h-[400px] overflow-hidden relative">
                    <img
                      src={featuredPost.coverImageId || "/posts/post-1-robotica.jpg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-brand-yellow text-brand-navy shadow-md">
                        ★ Matéria em Destaque
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="font-bold text-brand-blue uppercase">{featuredPost.tag}</span>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-navy group-hover:text-brand-blue transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      {featuredPost.excerpt && (
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">
                        Por {featuredPost.author || "Redação CSFA"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-black text-brand-blue group-hover:translate-x-1 transition-transform">
                        Ler artigo completo
                        <Icon icon="lucide:arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Grid of Other Posts */}
            {gridPosts.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-black text-brand-navy tracking-tight text-left">
                  Outras Notícias Recentes
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/noticias/${post.slug || post.id}`}
                      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
                    >
                      <div>
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={post.coverImageId || "/posts/post-2-rematriculas.jpg"}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-xs text-brand-navy shadow-xs">
                              {post.tag}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <span className="text-[11px] text-slate-400 font-medium block">
                            {post.date}
                          </span>

                          <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h4>

                          {post.excerpt && (
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                              {post.excerpt}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-medium truncate max-w-[150px]">
                          {post.author}
                        </span>
                        <span className="font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Ler mais
                          <Icon icon="lucide:chevron-right" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticiasPage;
