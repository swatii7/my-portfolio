import { Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-common">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        {/* Top content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary text-white">
                <Terminal className="w-5 h-5" />
              </div>
              <p className="font-mono text-lg font-bold text-text-primary">
                SWATI_DEV
              </p>
            </div>
            <p className="text-sm text-secondary max-w-sm">
              Frontend & Fullstack Developer specialized in creating modern,
              scalable and efficient web applications.
            </p>
            <div className="flex items-center gap-2 text-sm text-secondary">
              <MapPin className="w-4 h-4" />
              <span>Punjab, India</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <p className="font-bold text-primary-color uppercase tracking-wider text-sm">
              Quick Links
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#about"
                className="text-secondary-color hover:text-primary transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-secondary-color hover:text-primary transition-colors text-sm"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-secondary-color hover:text-primary transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-secondary-color hover:text-primary transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-secondary-color hover:text-primary transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <p className="font-bold text-primary-color uppercase tracking-wider text-sm">
              Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/swatii7"
                target="_blank"
                className="p-3 bg-elevated border border-border rounded-lg hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="p-3 bg-elevated border border-border rounded-lg hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:swatic946@gmail.com"
                className="p-3 bg-elevated border border-border rounded-lg hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-tertiary text-xs flex items-center gap-1">
              <span role="img" aria-label="laptop">
                💼
              </span>
              Available for freelance projects
            </p>
            <p className="text-tertiary text-xs">📧 swatic946@gmail.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-secondary">
          <p>© {new Date().getFullYear()} SWATI_DEV. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span>❤️</span> and
            <span className="font-mono text-primary">React </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

