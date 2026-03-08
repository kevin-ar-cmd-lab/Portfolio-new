const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kevinjuma.netlify.app';

const SEOData = {
  '/': {
    title: "Kevin's Digital Space",
    description: "Welcome to my digital portfolio showcasing projects, blogs, and contact info.",
    keywords: "Kevin, portfolio, web developer, projects, blog, contact",
    image: "/logo.jpg",
    url: `${siteUrl}/`,
  },
  '/about': {
    title: "About Kevin",
    description: "Learn more about Kevin, a passionate web developer and designer.",
    keywords: "about Kevin, developer, designer, bio",
    image: "/logo.jpg",
    url: `${siteUrl}/about`,
  },
  '/contact': {
    title: "Contact Kevin",
    description: "Get in touch with Kevin for web development and design inquiries.",
    keywords: "contact, email, reach out, hire developer",
    image: "/logo.jpg",
    url: `${siteUrl}/contact`,
  },
  '/projects': {
    title: "Kevin's Projects",
    description: "Explore the web and mobile development projects built by Kevin.",
    keywords: "projects, portfolio, web apps, mobile apps",
    image: "/logo.jpg",
    url: `${siteUrl}/projects`,
  },
  '/blog': {
    title: "Kevin's Blog",
    description: "Read articles and tutorials on web development, design, and tech tips.",
    keywords: "blog, tutorials, web development, tech",
    image: "/logo.jpg",
    url: `${siteUrl}/blog`,
  },
  '/testimonials': {
    title: "Client Testimonials",
    description: "See what clients and collaborators have to say about working with Kevin.",
    keywords: "testimonials, reviews, client feedback",
    image: "/logo.jpg",
    url: `${siteUrl}/testimonials`,
  },
  '/404': {
    title: "Page Not Found",
    description: "Sorry, the page you're looking for doesn't exist.",
    keywords: "404, not found, error",
    image: "/logo.jpg",
    url: `${siteUrl}/404`,
  },
};

export default SEOData;
