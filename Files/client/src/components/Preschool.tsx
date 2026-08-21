import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Heart, Mail, Phone } from "lucide-react";

export default function Preschool() {
  return (
    <section className="py-16 md:py-24" id="preschool">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif" data-testid="text-preschool-title">
              St. Anne's Preschool
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nurturing young minds and hearts in a loving, faith-centered environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2" data-testid="text-our-program">
                    Our Program
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    St. Anne's Preschool provides a nurturing, play-based learning environment 
                    where children develop social, emotional, and academic skills. Our experienced 
                    teachers create a warm, welcoming atmosphere where each child is valued and 
                    encouraged to explore, discover, and grow.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2" data-testid="text-our-philosophy">
                    Our Philosophy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that children learn best through play and hands-on experiences. 
                    Our curriculum balances structured learning with creative exploration, 
                    helping children develop confidence, curiosity, and a love of learning. 
                    We welcome families of all backgrounds and faiths.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/30 border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">
              Program Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">What We Offer</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Experienced, caring teachers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Small class sizes for individualized attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Play-based learning curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Safe, nurturing environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Parent communication and involvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Enrollment & Contact</h4>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    We welcome children ages 2-5 years old. Tours and enrollment 
                    information are available by contacting our preschool office.
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <a 
                      href="mailto:office@stanneschurch.org" 
                      className="text-primary hover:underline"
                      data-testid="link-preschool-email"
                    >
                      office@stanneschurch.org
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <a 
                      href="tel:510-490-0553" 
                      className="text-primary hover:underline"
                      data-testid="link-preschool-phone"
                    >
                      510-490-0553
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button asChild data-testid="button-contact-preschool">
                <a href="mailto:office@stanneschurch.org">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us About Enrollment
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
