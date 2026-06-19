/**
 * ============================================================================
 *  PORTFOLIO CONTENT  ‑  your words live here.
 * ============================================================================
 *
 *  Edit the values below. The types guide you: your editor will autocomplete
 *  fields and flag anything missing. To add an experience, copy an existing
 *  object in the `experience` array and change the values. To remove a whole
 *  section, set its toggle to false in config/site.config.ts instead of
 *  deleting content here.
 */

export interface About {
  /** Two or three short paragraphs. Plain sentences read best. */
  paragraphs: string[];
  /** A few quick facts shown beside the text. Keep them scannable. */
  highlights: { label: string; value: string }[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  /** e.g. "Berlin, Germany" or "Remote". */
  location: string;
  /** e.g. "Jul 2021" */
  start: string;
  /** "Present" for current roles. */
  end: string;
  /** Optional context line, e.g. "via Toptal". */
  via?: string;
  /** Bullet points. Lead with impact where you can. */
  points: string[];
  tech: string[];
}

export interface Project {
  name: string;
  /** Short description, one or two sentences. */
  description: string;
  href: string;
  tech: string[];
  /** Optional tag shown on the card, e.g. "Live" or "Open Source". */
  tag?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface PortfolioData {
  about: About;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}

export const portfolio: PortfolioData = {
  about: {
    paragraphs: [
      'I build iOS apps that thousands of people use daily. Over the past decade I have worked across fintech, healthcare, messaging, and consumer products, usually as the person responsible for the app end to end.',
      'My core is Swift, SwiftUI, UIKit, and Combine, and I know my way around clean architecture and CI/CD. Lately I have folded AI-assisted workflows into how I ship, including the Claude API and Claude Code. When an idea needs a web home, I build it full-stack in Next.js.',
      'I am a Toptal verified expert based in Berlin, open to senior and lead engineering roles, remote or hybrid.',
    ],
    highlights: [
      { label: 'Experience', value: '10+ years' },
      { label: 'Based in', value: 'Berlin, Germany' },
      { label: 'Status', value: 'Toptal verified' },
    ],
  },

  skills: [
    {
      title: 'Core iOS',
      items: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'iOS SDK', 'Xcode', 'Objective-C'],
    },
    {
      title: 'Architecture',
      items: ['MVVM', 'VIPER', 'Clean Architecture', 'Dependency Injection', 'SOLID'],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        'RxSwift',
        'RealmSwift',
        'Alamofire',
        'Core Bluetooth',
        'AVFoundation',
        'XMPPFramework',
        'CallKit',
        'CocoaPods',
      ],
    },
    {
      title: 'AI & APIs',
      items: ['Claude API', 'Claude Code', 'OpenClaw', 'Hermes Agent', 'Cursor', 'AI Integration', 'REST', 'GraphQL', 'WebSocket', 'Socket.IO'],
    },
    {
      title: 'CI/CD & DevOps',
      items: ['Fastlane', 'GitLab CI/CD', 'GitHub Actions', 'TestFlight', 'Bitrise', 'App Store Connect'],
    },
    {
      title: 'Backend & Cloud',
      items: ['Node.js', 'AWS', 'Firebase', 'Supabase', 'Express.js', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Cross-Platform',
      items: ['Next.js', 'React', 'TypeScript', 'React Native', 'Flutter', 'Kotlin', 'Python'],
    },
  ],

  experience: [
    {
      role: 'Senior iOS Engineer',
      company: 'MyPostcard.com',
      location: 'Berlin, Germany',
      start: 'Jul 2021',
      end: 'Present',
      points: [
        'Lead the iOS app end to end, from requirements through App Store release and ongoing release management.',
        'Hold a crash-free user rate above 99.84% through code quality work and architectural decisions.',
        "Integrated Apple Pay, Stripe, and the Google Maps API to expand the app's payment and location features.",
        'Built the CI/CD pipeline and wrote the coding style guidelines the team now follows.',
        'Run technical interviews, code reviews, and pairing sessions to keep code quality and team standards high.',
        'Shipped Claude API and AI chatbot features using AI-assisted development workflows.',
      ],
      tech: ['Swift', 'SwiftUI', 'UIKit', 'Apple Pay', 'Stripe', 'Claude API', 'GA4', 'TestFlight'],
    },
    {
      role: 'iOS Developer',
      company: 'ASD.ai',
      location: 'Remote',
      start: 'Aug 2020',
      end: 'Jan 2022',
      via: 'via Toptal',
      points: [
        'Built Rootines, an iOS app that helps clinicians track daily routines for neurodiverse patients.',
        'Designed complex animated UIs in SwiftUI and structured the app with MVVM and dependency injection.',
        'Used Combine for reactive data flow and RealmSwift for local persistence.',
      ],
      tech: ['Swift', 'SwiftUI', 'Combine', 'MVVM', 'RealmSwift', 'Binah.ai SDK'],
    },
    {
      role: 'Lead Software Engineer',
      company: 'TelloTalk, Inc.',
      location: 'Karachi, Pakistan',
      start: 'Dec 2017',
      end: 'Jun 2021',
      points: [
        "Led development of Pakistan's first all-in-one messaging app from iOS to cross-platform.",
        'Architected the iOS and Android apps with MVVM and clean architecture, and moved from Senior to Lead within months.',
        'Built TelloCast, a P2P and group messaging SDK that third parties could drop into their own apps.',
        'Set up and maintained CI/CD with Fastlane and GitLab Runner, and ran a Node.js push service on AWS.',
        'Ran cross-platform code reviews, led technical hiring, and held weekly internal tech talks.',
      ],
      tech: ['Swift', 'UIKit', 'Clean Architecture', 'Fastlane', 'XMPP', 'Socket.IO', 'Node.js', 'AWS', 'Kotlin'],
    },
    {
      role: 'iOS Developer',
      company: 'CoinBundle',
      location: 'Remote',
      start: 'May 2018',
      end: 'Dec 2018',
      via: 'Contract',
      points: [
        'Built a fintech iOS app from zero to launch that let non-technical users invest in crypto.',
        'Implemented custom UI and animations from Figma specs and integrated Rave for card payments.',
        'Used MVVM with RealmSwift for persistence.',
      ],
      tech: ['Swift', 'UIKit', 'MVVM', 'RealmSwift', 'Apple Pay', 'Alamofire'],
    },
    {
      role: 'Software Engineer (iOS)',
      company: 'VentureDive',
      location: 'Karachi, Pakistan',
      start: 'Apr 2017',
      end: 'Dec 2017',
      points: [
        'Shipped features, fixes, and performance work across several iOS apps.',
        'Wrote unit tests covering edge cases to keep the apps reliable.',
        'Led an Objective-C to Swift migration and introduced RxSwift to the team.',
      ],
      tech: ['Swift', 'Objective-C', 'RxSwift', 'MVVM', 'VIPER', 'UIKit'],
    },
    {
      role: 'Software Engineer (iOS)',
      company: 'Invision Custom Solutions',
      location: 'Karachi, Pakistan',
      start: 'Feb 2016',
      end: 'Mar 2017',
      points: [
        'First iOS hire. Built and shipped five apps across social, health, video call, and image processing.',
        'Integrated OpenTok for video calling and Twilio for communications.',
        'Owned the full lifecycle from requirements through deployment and client communication.',
      ],
      tech: ['Swift', 'Objective-C', 'Alamofire', 'OpenTok', 'Twilio', 'AWS'],
    },
    {
      role: 'Software Engineer',
      company: 'Panacloud Pvt. Ltd.',
      location: 'Karachi, Pakistan',
      start: 'Jun 2014',
      end: 'Jan 2016',
      points: [
        'Built one of the first Swift apps while Swift was still in beta.',
        "Led a team of 10 iOS developers and launched the company's first iOS app.",
        'Delivered Swift training sessions at universities across Karachi.',
      ],
      tech: ['Swift', 'Objective-C', 'Firebase', 'Node.js', 'MongoDB', 'Express.js'],
    },
  ],

  projects: [
    {
      name: 'Discernion',
      description:
        'An AI-powered news desk I built solo. A TypeScript pipeline pulls from 300+ publishers every two hours and runs each story through an AI model cascade for summaries, sentiment, and importance scores.',
      href: 'https://www.discernion.com',
      tech: ['Next.js 15', 'Supabase', 'PostgreSQL', 'TypeScript', 'Vercel'],
      tag: 'Live',
    },
    {
      name: 'GadgetByRaza',
      description:
        'A developer-tools site with 30+ browser-based utilities: JSON beautifier, JWT decoder, regex tester, QR generator, Swift Codable generator, and live crypto whale-trade streaming over a Binance WebSocket.',
      href: 'https://gadgetbyraza.com',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind', 'Vercel'],
      tag: 'Live',
    },
    {
      name: 'MRSelectCountry',
      description: 'An open-source CocoaPod for country selection in iOS apps.',
      href: 'https://cocoapods.org/pods/MRSelectCountry',
      tech: ['Swift', 'UIKit', 'CocoaPods'],
      tag: 'Open Source',
    },
    {
      name: 'MRTextField',
      description: 'An open-source CocoaPod that adds floating labels and validation to UITextField.',
      href: 'https://cocoapods.org/pods/MRTextField',
      tech: ['Swift', 'UIKit', 'CocoaPods'],
      tag: 'Open Source',
    },
  ],

  education: [
    {
      degree: 'M.S. Computer Science',
      school: 'Institute of Business Administration (IBA)',
      location: 'Karachi, Pakistan',
      period: '2019 - 2021',
    },
    {
      degree: 'B.S. Computer Science',
      school: 'University of Karachi',
      location: 'Karachi, Pakistan',
      period: '2012 - 2016',
    },
  ],

  certifications: [
    { name: 'Programming for Everybody (Python)', issuer: 'Coursera', year: '2020' },
    { name: 'AI for Everyone', issuer: 'Coursera', year: '2020' },
    { name: 'Python 101 for Data Science', issuer: 'Cognitive Class', year: '2019' },
    { name: 'Blockchain Essentials', issuer: 'Cognitive Class', year: '2019' },
    { name: 'Bioinformatics I', issuer: 'Coursera', year: '2019' },
    { name: 'MongoDB for Node.js Developers', issuer: 'MongoDB University', year: '2014' },
  ],
};
