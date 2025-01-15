import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://astro-air.guoqi.dev",
  meta: {
    favicon: "/avatar.png",
    url: "https://blog.sunguoqi.com",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/sun0225SUN",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/sun0225SUN",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [
      {
        label: "CamLife",
        link: "https://camlife.cn",
      },
    ],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const en = {
  ...common,
  siteName: "Andrew P Turner",
  meta: {
    ...common.meta,
    title: "Andrew P Turner",
    slogan: "A digital garden where ideas flourish - from curious seedlings to lasting insights",
    description: "Voice AI, Atomic Notes, Product Owner, Business Analysis, Bikepacking",
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are all the posts within this digital garden",
      ogImage: "/images/page-meta/en/archive.png",
    },
    about: {
      title: "About",
      description: "About this website",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
