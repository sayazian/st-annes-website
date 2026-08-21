import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4" data-testid="text-footer-church-name">
              St. Anne's Episcopal Church
            </h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground" data-testid="text-footer-address">
                2791 Driscoll Road<br />
                Fremont, CA 94539
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Email: <a href="mailto:office@stanneschurch.org" className="hover:text-primary transition-colors">office@stanneschurch.org</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: <a href="tel:510-490-0553" className="hover:text-primary transition-colors">510-490-0553</a>
              </p>
            </address>
            <p className="text-sm text-muted-foreground mt-3">
              A welcoming Episcopal community
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#visit"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Plan Your Visit
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1-320EkmEDOINHZPRdTlcaY9eWQYZAltFFg6-r8x876o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-bulletin"
                >
                  Sunday Bulletin
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/101OsqA2-Q7EdFtRyFVzv698cVgUS2yDP-IRhtmOPwWE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-readings"
                >
                  Weekly Readings
                </a>
              </li>
              <li>
                <a
                  href="https://zoom.us/j/93548667568?pwd=YsPyWHlfttRyIlOI1kOabbQLknAiWC.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-zoom"
                >
                  Join on Zoom
                </a>
              </li>
              <li>
                <a
                  href="#labyrinth"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  The Labyrinth
                </a>
              </li>
              <li>
                <a
                  href="#preschool"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Preschool
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <a
                  href="mailto:office@stanneschurch.org"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  office@stanneschurch.org
                </a>
              </li>
              <li className="text-muted-foreground">
                <a
                  href="tel:510-490-0553"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  510-490-0553
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} St. Anne's Episcopal Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
