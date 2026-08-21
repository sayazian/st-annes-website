import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Visit", path: "#visit" },
    { name: "Worship", path: "#services" },
    { name: "Programs", path: "#events" },
    { name: "Give", path: "#give" },
    { name: "Contact", path: "#contact" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("#")) return false;
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <h1 className="text-xl font-bold font-serif text-primary">
              St. Anne's Episcopal Church
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.path.startsWith("#") ? (
                <a
                  key={item.path}
                  href={item.path}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  <Button
                    variant="ghost"
                    className="hover-elevate active-elevate-2"
                  >
                    {item.name}
                  </Button>
                </a>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  <Button
                    variant={isActive(item.path) ? "secondary" : "ghost"}
                    className="hover-elevate active-elevate-2"
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate active-elevate-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-4 space-y-2">
            {navItems.map((item) => (
              item.path.startsWith("#") ? (
                <a
                  key={item.path}
                  href={item.path}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover-elevate active-elevate-2"
                  >
                    {item.name}
                  </Button>
                </a>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  <Button
                    variant={isActive(item.path) ? "secondary" : "ghost"}
                    className="w-full justify-start hover-elevate active-elevate-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
