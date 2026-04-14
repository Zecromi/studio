import React from 'react';

export const ProjectIframePreview = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="h-full w-[111%] pointer-events-none scale-90 origin-top-left flex justify-center overflow-hidden rounded-xl border border-primary/20 bg-background/50">
      <iframe src={url} className="w-full h-[111%] border-0 pointer-events-none" title={title} loading="lazy" />
    </div>
  );
};

export const ProjectIframeModal = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="h-full w-full min-h-[500px] overflow-hidden rounded-lg bg-background/50">
      <iframe src={url} className="w-full h-full min-h-[500px] border-0" title={title} loading="lazy" />
    </div>
  );
};
