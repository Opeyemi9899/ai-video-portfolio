export const site = {
  name: "Adewoye Opeyemi Precious",
  brand: "Opeyemi Precious",
  role: "AI Video Creator",
  tagline: "Cinematic storytelling. Purposeful brand videos.",
  location: "Akure, Nigeria",
  // TODO: set your final live domain, e.g. https://opeyemiprecious.com
  domain: "",
  // Place your sharing image at public/og-cover.jpg (1200x630) and keep the filename.
  shareImage: "/og-cover.jpg",
};

export const contact = {
  phoneDisplay: "08107245804",
  phoneHref: "tel:+2348107245804",
  email: "opeyemiprecious191@gmail.com",
  emailHref: "mailto:opeyemiprecious191@gmail.com",
  location: "Akure, Nigeria",
  availability: "Working with Nigerian and international clients",
  whatsappBase: "https://wa.me/2348107245804",
  defaultMessage:
    "Hi Opeyemi, I'd like to discuss a video project. The type of video I need is:",
};

export function whatsappLink(message: string): string {
  return `${contact.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsApp = whatsappLink(contact.defaultMessage);
