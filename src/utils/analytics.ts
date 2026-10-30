// Google Analytics 4 (GA4) custom event tracking utility

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a custom event to Google Analytics 4 via gtag.js
 * Safely checks if gtag is loaded on window.
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, eventParams);
    } catch (err) {
      // Fail silently in development or if blocked by ad-blocker
      console.debug('[GA4] Event dispatch failed:', err);
    }
  }
}

// Common conversion tracking helpers
export const trackAnalytics = {
  // Conversion: Schedule meeting click
  scheduleMeetingClick: (source: string = 'contact_section') => {
    trackEvent('schedule_meeting_click', {
      event_category: 'conversion',
      event_label: 'Calendly Schedule Meeting',
      source,
    });
  },

  // Conversion: Direct email click or copy
  emailInteraction: (action: 'click' | 'copy', email: string) => {
    trackEvent('email_interaction', {
      event_category: 'lead',
      action,
      destination: email,
    });
  },

  // Engagement: Social network click
  socialClick: (platform: string, url: string) => {
    trackEvent('social_click', {
      event_category: 'engagement',
      platform,
      url,
    });
  },

  // Engagement: Discussion topic selected
  quickTopicSelect: (topic: string) => {
    trackEvent('quick_topic_select', {
      event_category: 'engagement',
      topic,
    });
  },

  // Engagement: Project view / link click
  projectView: (projectName: string, link: string) => {
    trackEvent('project_view', {
      event_category: 'engagement',
      project_name: projectName,
      link,
    });
  },
};
