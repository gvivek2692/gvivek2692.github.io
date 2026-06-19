/**
 * ============================================================================
 *  SITE CONFIG  ‑  edit this file to make the portfolio yours.
 * ============================================================================
 *
 *  This is one of only two files you need to touch (the other is
 *  data/portfolio.ts). Everything here controls identity, branding, links,
 *  SEO, and which sections appear. Components read from this file, so you
 *  never edit component code to rebrand.
 */

export type SectionKey =
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'contact';

export interface SocialLink {
  /** Accessible name for the link (used as its aria-label). */
  label: string;
  href: string;
  /** Which brand glyph to show. Each key maps to an SVG in components/ui/SocialIcon.tsx. */
  icon: 'github' | 'linkedin' | 'toptal' | 'stackoverflow' | 'mail' | 'globe' | 'medium';
}

export interface SiteConfig {
  /** Shown in the browser tab and used across SEO meta. */
  name: string;
  /** Short text for the nav logo. Defaults to the first name if left empty. */
  logoText: string;
  role: string;
  /** Short, one-line value statement for the hero and meta description. */
  tagline: string;
  location: string;
  email: string;
  /** Optional. Leave empty to hide. */
  phone: string;
  /** Public URL of the deployed site, used for canonical and OG tags. */
  url: string;
  /** Path to the downloadable CV inside /public. Leave empty to hide the button. */
  resumePath: string;
  /** Optional link to this site's source repo, shown in the footer. Leave empty to hide the line. */
  repoUrl: string;
  /**
   * Optional Toptal profile or resume URL. When set, the Toptal "Top 3% Talent"
   * badge appears in the Contact section. Leave empty to hide the badge.
   */
  toptalBadgeUrl: string;

  /**
   * Single accent color as an "R G B" string (no commas). This is the one
   * rebrand knob. Default is a professional blue. Try "5 150 105" (emerald)
   * or "124 58 237" (violet) if you want a different feel. Pick a shade dark
   * enough that white text stays readable on the solid accent buttons (aim for
   * a 4.5:1 contrast ratio against white).
   */
  accentRGB: string;
  /** Same idea for the accent used in dark mode (usually a touch lighter). */
  accentRGBDark: string;

  /** Words the hero cycles through after your role. Keep them short. */
  heroRotatingWords: string[];

  socials: SocialLink[];

  /** Turn sections on or off without deleting any code. */
  sections: Record<SectionKey, boolean>;

  /** Nav order. Only keys that are also enabled above will render. */
  navOrder: SectionKey[];
}

export const siteConfig: SiteConfig = {
  name: 'Muhammad Raza Master',
  logoText: 'Raza',
  role: 'Software Engineer',
  tagline:
    'Software engineer with 10+ years building iOS apps and full-stack products used worldwide. Toptal verified, based in Berlin.',
  location: 'Berlin, Germany',
  email: 'mrazam110@gmail.com',
  phone: '',
  url: 'https://mrazam110.github.io',
  resumePath: '/cv.pdf',
  repoUrl: 'https://github.com/mrazam110/mrazam110.github.io',
  toptalBadgeUrl: 'https://www.toptal.com/developers/resume/muhammad-raza-master#XM93lX',

  accentRGB: '37 99 235', // #2563EB
  accentRGBDark: '59 130 246', // #3B82F6

  heroRotatingWords: [
    'iOS Developer',
    'Full-Stack Developer',
    'Swift & SwiftUI',
    'AI-Assisted Development',
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/mrazam110', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mrazam110', icon: 'linkedin' },
    { label: 'Medium', href: 'https://medium.com/@mrazam110', icon: 'medium' },
    {
      label: 'Toptal',
      href: 'https://www.toptal.com/developers/resume/muhammad-raza-master',
      icon: 'toptal',
    },
    {
      label: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/3847946/muhammad-raza',
      icon: 'stackoverflow',
    },
  ],

  sections: {
    about: true,
    skills: true,
    experience: true,
    projects: true,
    education: true,
    certifications: true,
    contact: true,
  },

  navOrder: [
    'about',
    'skills',
    'experience',
    'projects',
    'education',
    'certifications',
    'contact',
  ],
};
