"use client";

import { useState, useEffect } from 'react';
import Loading from '@/app/loading';

export function InitialLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
}
