import { useEffect, useState } from "react";
import { Globe, Menu, Moon, Sun, Terminal, X } from "lucide-react";
import ResumePdf from "../../assets/Resume.pdf";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light"); // "light" | "dark"
    const [isScrolled, setIsScrolled] = useState(false);
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = ResumePdf;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Close menu on desktop resize (lg and up)
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Toggle header style on scroll
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Init theme from localStorage / system preference, then apply to <html>
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const initial =
            stored === "light" || stored === "dark"
                ? stored
                : window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
                    ? "dark"
                    : "light";

        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    // Persist + apply theme
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const navItems = [
        { id: 1, label: "About", href: "#about" },
        { id: 2, label: "Experience", href: "#experience" },
        { id: 3, label: "Skills", href: "#skills" },
        { id: 4, label: "Projects", href: "#projects" },
        { id: 5, label: "Contact", href: "#contact" }
    ]
    return (
        <header
            className={[
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-elevated/80 backdrop-blur-md border-b border-border"
                    : "bg-transparent",
            ].join(" ")}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="p-2 bg-primary rounded-lg text-white transition-transform group-hover:scale-110">
                        <Terminal />
                    </div>
                    <span className="font-mono text-xl font-bold tracking-tight text-dark">SWATI_DEV</span>
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <a key={item.id} href={item.href} className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                            <span className="text-primary font-mono text-xs mr-1">{String(index + 1).padStart(2, '0')}.</span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-4">
                    

                    {/* Language Button */}
                    <button className="cursor-pointer p-2 rounded-lg bg-elevated border border-border hover:bg-subtle transition-colors flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase text-primary-color font-bold">EN</span>
                    </button>

                    {/* Theme Toggle Button */}
                    <button
                        type="button"
                        className="cursor-pointer p-2 rounded-lg bg-elevated border border-border hover:bg-subtle transition-colors"
                        aria-label="Toggle theme"
                        aria-pressed={theme === "dark"}
                        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                    >
                        {theme === "dark" ? (
                            <Sun className="w-4 h-4 text-white" />
                        ) : (
                            <Moon className="w-4 h-4 text-gray-800" />
                        )}
                    </button>

                    {/* Resume Button */}
                    <button
                        type="button"
                        onClick={handleDownloadCV}
                        className="items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-primary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 px-4 py-2 text-xs hidden lg:flex"
                    >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="text-white uppercase text-xs font-semibold">RESUME</span>
                    </button>
                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        className="lg:hidden cursor-pointer p-2 rounded-lg bg-elevated border border-border hover:bg-subtle transition-colors"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((v) => !v)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile expanded nav (<= lg) */}
            <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="mx-4 sm:mx-6 mt-2 rounded-xl bg-elevated border border-border shadow-lg">
                    <nav className="flex flex-col p-3">
                        {navItems.map((item, index) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-secondary hover:text-primary hover:bg-subtle transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-primary font-mono text-xs">{String(index + 1).padStart(2, '0')}.</span>
                                    <span>{item.label}</span>
                                </span>
                            </a>
                        ))}

                        <button
                            type="button"
                            onClick={handleDownloadCV}
                            className="mt-2 flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer bg-primary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 px-4 py-2 text-xs"
                        >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span className="text-white uppercase text-xs font-semibold">RESUME</span>
                        </button>
                    </nav>
                </div>
            </div>
            
        </header>
    )
}