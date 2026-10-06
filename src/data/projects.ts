export type ProjectCategory =
  | "AI Cinematic Shorts"
  | "Music Videos"
  | "AI Product Ads"
  | "AI UGC Ads";

export type Aspect = "16:9" | "9:16" | "1:1";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Local file in public/videos/ e.g. "/videos/brand-story.mp4", or a YouTube/Vimeo/Google-Drive embed URL. Leave empty for placeholder. */
  videoSrc: string;
  /** Poster image in public/thumbnails/ e.g. "/thumbnails/brand-story.jpg". Leave empty for labelled placeholder. */
  poster: string;
  description: string;
  goal: string;
  role: string;
  /** e.g. "Personal project" or client name. Keep empty if not applicable. */
  label: string;
  aspect: Aspect;
};

export const categories: Array<"All" | ProjectCategory> = [
  "All",
  "AI Cinematic Shorts",
  "Music Videos",
  "AI Product Ads",
  "AI UGC Ads",
];

/**
 * HOW TO ADD A PROJECT
 * 1. Put your video in public/videos/ and a thumbnail in public/thumbnails/
 * 2. Copy one entry below, fill in title/category/description/goal/role.
 * 3. Set videoSrc + poster to the new file paths, set aspect to match the video.
 * 4. Keep label honest: "Personal project" or the real client name (with permission).
 *
 * TIP: to make a poster from a video, temporarily install
 * `ffmpeg-static`, then run:
 *   node -e "const {execFileSync}=require('child_process');
 *     execFileSync(require('ffmpeg-static'),
 *       ['-y','-ss','2','-i','public/videos/YOUR-VIDEO.mp4','-vframes','1',
 *        '-vf','scale=640:-2','-q:v','4','public/thumbnails/YOUR-POSTER.jpg'])"
 */
export const projects: Project[] = [
  {
    id: "sample-1",
    title: "Sample 1",
    category: "AI Cinematic Shorts",
    videoSrc: "/videos/sample-1.mp4",
    poster: "/thumbnails/sample-1.jpg",
    description:
      "A vertical cinematic short with atmosphere-driven visuals and a fast opening hook.",
    goal: "Hold attention from the first three seconds with cinematic visual storytelling.",
    role: "Concept, visuals and edit",
    label: "Sample project",
    aspect: "9:16",
  },
  {
    id: "sample-2",
    title: "Sample 2",
    category: "AI Product Ads",
    videoSrc: "/videos/sample-2.mp4",
    poster: "/thumbnails/sample-2.jpg",
    description:
      "A vertical product ad built around a strong visual hook and clear product messaging.",
    goal: "Present the product clearly and support a sales-focused campaign.",
    role: "Concept, visuals and edit",
    label: "Sample project",
    aspect: "9:16",
  },
  {
    id: "sample-3",
    title: "Sample 3",
    category: "Music Videos",
    videoSrc: "/videos/sample-3.mp4",
    poster: "/thumbnails/sample-3.jpg",
    description:
      "A widescreen music visual shaped around mood, rhythm and creative direction.",
    goal: "Translate sound into visuals that match the music's emotion and energy.",
    role: "Visual concept and edit",
    label: "Sample project",
    aspect: "16:9",
  },
];

export function isEmbedUrl(src: string): boolean {
  return /youtube\.com|youtu\.be|vimeo\.com|drive\.google\.com/.test(src);
}

export function toEmbedUrl(src: string): string {
  // YouTube watch -> embed
  const yt = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0`;
  const vimeo = src.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  // Google Drive file link -> preview embed
  const drive = src.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
  return src;
}
