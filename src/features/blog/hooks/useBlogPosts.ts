import { useState, useEffect } from 'react';
import { blogService } from '../services/blog.service';
import type { BlogPost } from '../types/blog.types';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    blogService.getAll()
      .then((data) => {
        if (isMounted) setPosts(data);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { posts, loading };
}
