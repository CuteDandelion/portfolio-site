'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  isYouTube?: boolean;
  youtubeId?: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
  title?: string;
}

export default function VideoCarousel({ videos, title }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  if (videos.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-text-secondary">No videos available. Add your videos to the assets directory.</p>
      </div>
    );
  }

  const currentVideo = videos[currentIndex];

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-heading font-semibold mb-6 text-text-primary">
          {title}
        </h3>
      )}

      <div className="relative">
        {/* Main Video Display */}
        <div className="card overflow-hidden mb-6">
          <div className="relative aspect-video bg-primary-bg-secondary">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {currentVideo.isYouTube && currentVideo.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${currentVideo.youtubeId}`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    controls
                    poster={currentVideo.posterUrl}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src={currentVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {videos.length > 1 && (
              <>
                <button
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Previous video"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Next video"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Video Info */}
          <div className="p-6">
            <h4 className="text-xl font-semibold mb-2 text-text-primary">
              {currentVideo.title}
            </h4>
            <p className="text-text-secondary">
              {currentVideo.description}
            </p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {videos.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => goToVideo(index)}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-accent-blue scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="w-32 h-20 bg-primary-bg-secondary">
                  <img
                    src={video.posterUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {index === currentIndex && (
                  <div className="absolute inset-0 flex items-center justify-center bg-accent-blue/20">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Dots Indicator */}
        {videos.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-accent-blue w-8'
                    : 'bg-border hover:bg-text-secondary'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
