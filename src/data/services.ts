import { contact, whatsappLink } from "./site";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "film" | "music" | "box" | "user";
  whatsapp: string;
};

function serviceLink(serviceTitle: string) {
  return whatsappLink(
    `Hi Opeyemi, I'd like to discuss this service: ${serviceTitle}. Here's what I need:`
  );
}

export const services: Service[] = [
  {
    id: "cinematic-shorts",
    title: "AI Cinematic Shorts",
    description:
      "Bring an idea to life through cinematic visuals, atmosphere and purposeful storytelling.",
    icon: "film",
    whatsapp: serviceLink("AI Cinematic Shorts"),
  },
  {
    id: "music-videos",
    title: "Music Videos",
    description:
      "Translate your sound into visuals shaped around your music, mood and creative direction.",
    icon: "music",
    whatsapp: serviceLink("Music Videos"),
  },
  {
    id: "product-ads",
    title: "AI Product Ads",
    description:
      "Showcase your product through strong visual hooks and messaging built around your campaign goal.",
    icon: "box",
    whatsapp: serviceLink("AI Product Ads"),
  },
  {
    id: "ugc-ads",
    title: "AI UGC Ads",
    description:
      "Create relatable, creator-style ads with AI-generated presenters, engaging hooks and clear product messaging.",
    icon: "user",
    whatsapp: serviceLink("AI UGC Ads"),
  },
];

export { contact };
