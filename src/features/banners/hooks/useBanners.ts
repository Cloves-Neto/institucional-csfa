import { useState, useEffect } from 'react';
import { bannerService } from '../services/banner.service';
import type { BannerItem } from '../types/banner.types';

export function useBanners() {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    bannerService.getAll()
      .then((data) => {
        if (isMounted) setBanners(data);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { banners, loading };
}
