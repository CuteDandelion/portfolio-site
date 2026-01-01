/**
 * Analytics library for tracking user interactions
 * This data can be exposed via a metrics endpoint for Prometheus scraping
 */

interface AnalyticsEvent {
  event: string;
  timestamp: number;
  data?: Record<string, any>;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private readonly maxEvents = 1000;

  /**
   * Track a generic event
   */
  track(event: string, data?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      timestamp: Date.now(),
      data,
    };

    this.events.push(analyticsEvent);

    // Keep only the last maxEvents events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', event, data);
    }
  }

  /**
   * Track page view
   */
  trackPageView(page: string) {
    this.track('page_view', { page });
  }

  /**
   * Track video interaction
   */
  trackVideoInteraction(action: 'play' | 'pause' | 'complete', videoId: string) {
    this.track('video_interaction', { action, videoId });
  }

  /**
   * Track section view (when user scrolls to a section)
   */
  trackSectionView(section: string) {
    this.track('section_view', { section });
  }

  /**
   * Track work experience expansion
   */
  trackWorkExperienceExpand(companyId: string) {
    this.track('work_experience_expand', { companyId });
  }

  /**
   * Track tech stack interaction
   */
  trackTechStackClick(techId: string) {
    this.track('tech_stack_click', { techId });
  }

  /**
   * Track social link click
   */
  trackSocialClick(platform: string) {
    this.track('social_click', { platform });
  }

  /**
   * Get all events (for metrics endpoint)
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Get event counts by type (for Prometheus metrics format)
   */
  getEventCounts(): Record<string, number> {
    const counts: Record<string, number> = {};

    this.events.forEach((event) => {
      counts[event.event] = (counts[event.event] || 0) + 1;
    });

    return counts;
  }

  /**
   * Clear all events
   */
  clear() {
    this.events = [];
  }
}

// Singleton instance
const analytics = new Analytics();

export default analytics;

// For use in components
export const useAnalytics = () => {
  return {
    trackPageView: (page: string) => analytics.trackPageView(page),
    trackVideoInteraction: (action: 'play' | 'pause' | 'complete', videoId: string) =>
      analytics.trackVideoInteraction(action, videoId),
    trackSectionView: (section: string) => analytics.trackSectionView(section),
    trackWorkExperienceExpand: (companyId: string) =>
      analytics.trackWorkExperienceExpand(companyId),
    trackTechStackClick: (techId: string) => analytics.trackTechStackClick(techId),
    trackSocialClick: (platform: string) => analytics.trackSocialClick(platform),
  };
};
