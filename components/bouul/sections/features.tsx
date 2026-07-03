import { FeatureSplit } from "./feature-split";
import { SearchResultsMock, LiveTrackingMock, ZolaChatMock, SocialFeedMock } from "@/components/mockups";

export function SearchFeature() {
  return (
    <FeatureSplit
      id="search"
      eyebrow="Smart search & discovery"
      title="Search that understands intent."
      body="Hybrid keyword + semantic search across seven tabs. A personalized discovery feed surfaces what's relevant to you."
      bullets={["7 tabs: services, vendors, posts, glimpses, reviews, users", "Semantic, AI-powered matching", "City-level discovery"]}
    >
      <SearchResultsMock />
    </FeatureSplit>
  );
}

export function BookingFeature() {
  return (
    <FeatureSplit
      reverse
      eyebrow="Booking & live tracking"
      title="Book in seconds. Watch it happen."
      body="Real availability and pricing, then live status and ETA from booking to completion."
      bullets={["Instant, secured booking", "Real-time pro tracking & ETA", "Notifications at every step"]}
    >
      <LiveTrackingMock />
    </FeatureSplit>
  );
}

export function ZolaFeature() {
  return (
    <FeatureSplit
      eyebrow="Zola AI assistant"
      title="An assistant that gets it done."
      body="Zola finds services, manages bookings, and even runs your business — right in chat."
      bullets={["Find & book through conversation", "Business mode for vendors", "Follow-up suggestions, inline"]}
    >
      <ZolaChatMock />
    </FeatureSplit>
  );
}

export function SocialFeature() {
  return (
    <FeatureSplit
      reverse
      eyebrow="Social & content"
      title="Follow the pros you love."
      body="A community feed of glimpses, posts and hashtags. Follow vendors and stay in the loop."
      bullets={["Follow vendors & creators", "Glimpses, posts, hashtags", "Reviews only from real bookings"]}
    >
      <SocialFeedMock />
    </FeatureSplit>
  );
}
