import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, BookOpen, Users, Clock, MapPin, Heart } from "lucide-react";

export default function Newcomers() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="visit">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4" data-testid="text-newcomers-title">
            Planning Your First Visit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're so glad you're considering visiting St. Anne's! Here's what to expect when you join us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">When We Meet</h3>
              <p className="text-muted-foreground text-sm">
                Sunday worship at <strong>10:00 AM</strong>. Services last about an hour and include 
                beautiful music, scripture readings, and inspiring messages.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Where We Are</h3>
              <p className="text-muted-foreground text-sm">
                <strong>2791 Driscoll Road, Fremont, CA 94539</strong>. 
                Parking is available on site. Enter through the main doors facing Driscoll Road.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">What to Wear</h3>
              <p className="text-muted-foreground text-sm">
                Come as you are! Some wear business casual, others prefer jeans. 
                What matters most is that you're comfortable and present.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8 border mb-8">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
            What to Expect During Your Visit
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Warm Welcome</h4>
                  <p className="text-sm text-muted-foreground">
                    Our greeters will welcome you at the door and can answer any questions. 
                    Feel free to introduce yourself or simply find a seat – whatever feels right.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Episcopal Worship</h4>
                  <p className="text-sm text-muted-foreground">
                    We follow the traditional Episcopal liturgy with Morning Prayer. 
                    Bulletins guide you through the service, and you're welcome to 
                    participate as much or as little as you like.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Inclusive Community</h4>
                  <p className="text-sm text-muted-foreground">
                    All are welcome at St. Anne's, regardless of where you are on your 
                    spiritual journey. We celebrate diversity and strive to create a 
                    space where everyone feels valued and loved.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold mb-3">Frequently Asked Questions</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium mb-1">Do I need to bring anything?</p>
                  <p className="text-muted-foreground">
                    No! We provide bulletins and everything you need for worship.
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Can I join via Zoom?</p>
                  <p className="text-muted-foreground">
                    Yes! We livestream all services. The Zoom link is available on our homepage.
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Is there coffee hour?</p>
                  <p className="text-muted-foreground">
                    We often have fellowship time after the service where you can meet 
                    members of the congregation and enjoy light refreshments.
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">What if I have more questions?</p>
                  <p className="text-muted-foreground">
                    Please reach out! We're happy to answer any questions and help make 
                    your first visit comfortable and welcoming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ready to join us? We can't wait to meet you!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild data-testid="button-zoom-visit">
              <a href="https://zoom.us/j/93548667568?pwd=YsPyWHlfttRyIlOI1kOabbQLknAiWC.1" target="_blank" rel="noopener noreferrer">
                Join This Sunday on Zoom
              </a>
            </Button>
            <Button variant="outline" asChild data-testid="button-contact-visit">
              <a href="#contact">
                Contact Us With Questions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
