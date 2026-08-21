import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiYelp } from "react-icons/si";

export default function Connect() {
  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4" data-testid="text-connect-title">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you and welcome you to our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact & Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <address className="not-italic text-sm" data-testid="text-address">
                    2791 Driscoll Road<br />
                    Fremont, CA 94539
                  </address>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:office@stanneschurch.org"
                  className="text-primary hover:underline text-sm"
                  data-testid="link-email"
                >
                  office@stanneschurch.org
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:510-490-0553"
                  className="text-primary hover:underline flex items-center gap-2 text-sm"
                  data-testid="link-phone"
                >
                  <Phone className="h-4 w-4" />
                  510-490-0553
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Service Times
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="font-semibold" data-testid="text-service-day">Sunday Worship</p>
                <p className="text-muted-foreground" data-testid="text-service-schedule">10:00 AM</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Join us in person or via Zoom
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">
                Stay connected on social media
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid="button-facebook"
                >
                  <a href="https://www.facebook.com/StAnnesEpiscopalFremont/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <SiFacebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid="button-instagram"
                >
                  <a href="https://www.instagram.com/stannesfremont/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <SiInstagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid="button-yelp"
                >
                  <a href="https://www.yelp.com/biz/st-annes-episcopal-church-fremont" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                    <SiYelp className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
