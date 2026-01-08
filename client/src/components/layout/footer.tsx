import { Link } from "wouter";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail, MapPin, Cpu } from "lucide-react";
import { profile } from "@/data/profile";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: profile.social.github, icon: Github, label: "GitHub" },
  { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.social.youtube, icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/">
              <motion.div 
                className="flex items-center gap-2 cursor-pointer mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg tracking-tight">
                  TekMonger
                </span>
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              {profile.role}. Specializing in AI applications, fraud detection, time-series forecasting, and computer vision.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {profile.shortName}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
