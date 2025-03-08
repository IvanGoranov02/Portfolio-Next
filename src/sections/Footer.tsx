import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Achievements", href: "#achievements" },
  { title: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ivan-goranov/",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    title: "GitHub",
    url: "https://github.com/IvanGoranoff",
    ariaLabel: "Check out my GitHub projects",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/ivgoranov/",
    ariaLabel: "Follow me on Instagram",
  },
];

export const Footer = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            © {new Date().getFullYear()}. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors group"
                onClick={(e) => handleScroll(e, link.href)}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </nav>
          <nav className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-emerald-300 transition-colors font-medium"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
