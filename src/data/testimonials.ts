export type Testimonial = {
  quote: string;
  name: string;
  businessOrRole?: string;
  photo?: string;
};

/**
 * HOW TO ADD GENUINE TESTIMONIALS
 * 1. Only add quotes you received with permission to publish.
 * 2. Copy the example structure and paste the exact words.
 * 3. Optional: add businessOrRole, and put an approved photo in public/testimonials/.
 * 4. The section stays hidden automatically while this list is empty.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Opeyemi turned a simple product idea into a cinematic ad that looked like it came from a big production studio. We posted it, and the engagement was far higher than anything we'd done before. Fast, creative, and easy to work with.",
    name: "William David",
    businessOrRole: "Founder, Brand Owner",
  },
  {
    quote:
      "What I love most is that the videos aren't just beautiful, they're built to sell. Opeyemi understood our audience right away and delivered AI videos that held attention from the first second. I'd recommend this service to any brand.",
    name: "John Robert",
    businessOrRole: "Marketing Manager",
  },
];
