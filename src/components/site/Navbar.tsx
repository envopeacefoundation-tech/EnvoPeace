import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { programs } from "./programs-data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-elegant">
            <Heart className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-foreground md:text-base">Envo Peace</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
              & Development Foundation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.label === "Programs" ? (
              <DropdownMenu key={link.to}>
                <DropdownMenuTrigger
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                    isActive("/programs")
                      ? "text-primary-deep bg-primary-soft"
                      : "text-foreground/80 hover:bg-primary-soft hover:text-primary-deep",
                  )}
                >
                  Programs <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64">
                  <DropdownMenuItem asChild>
                    <Link to="/programs" className="cursor-pointer font-medium">
                      All Programs
                    </Link>
                  </DropdownMenuItem>
                  {programs.map((p) => {
                    const Icon = p.icon;
                    return (
                      <DropdownMenuItem key={p.slug} asChild>
                        <Link
                          to="/programs/$slug"
                          params={{ slug: p.slug }}
                          className="cursor-pointer"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <span>{p.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(link.to)
                    ? "text-primary-deep bg-primary-soft"
                    : "text-foreground/80 hover:bg-primary-soft hover:text-primary-deep",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/donate">
              <Heart className="h-4 w-4" /> Support Our Cause
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(link.to)
                    ? "bg-primary-soft text-primary-deep"
                    : "text-foreground/85 hover:bg-primary-soft hover:text-primary-deep",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Our Programs
            </div>
            <Link
              to="/programs"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-primary-soft hover:text-primary-deep"
            >
              All Programs
            </Link>
            {programs.map((p) => (
              <Link
                key={p.slug}
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className="rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-primary-soft hover:text-primary-deep"
              >
                {p.title}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2 sm:hidden">
              <Link to="/donate">
                <Heart className="h-4 w-4" /> Support Our Cause
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
