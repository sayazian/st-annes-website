import { Card, CardContent } from "@/components/ui/card";
import { Church, Users, Heart, Book } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 md:py-24" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4" data-testid="text-about-title">
            Welcome to St. Anne's
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A vibrant Episcopal community in the heart of Fremont, California
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Church className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2" data-testid="text-our-mission">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    We are a welcoming Episcopal community dedicated to worship, fellowship, and service. 
                    Our mission is to spread God's love through meaningful liturgy, engaging programs, 
                    and compassionate outreach to all.
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
                  <h3 className="font-serif font-semibold text-xl mb-2" data-testid="text-our-community">
                    Our Community
                  </h3>
                  <p className="text-muted-foreground">
                    St. Anne's is a diverse, multi-generational congregation where everyone is welcome. 
                    Whether you're new to the Episcopal tradition or a lifelong member, you'll find 
                    a warm and inclusive spiritual home here.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2" data-testid="text-our-worship">
                    Our Worship
                  </h3>
                  <p className="text-muted-foreground">
                    We celebrate the beauty of traditional Episcopal liturgy with Morning Prayer services 
                    each Sunday. Our worship combines meaningful scripture readings, inspiring music, 
                    and contemplative prayer in a sacred atmosphere.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2" data-testid="text-all-welcome">
                    All Are Welcome
                  </h3>
                  <p className="text-muted-foreground">
                    No matter where you are on your spiritual journey, you are welcome at St. Anne's. 
                    We invite you to join us for worship, connect with our community, and discover 
                    the love and grace that awaits you here.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <p className="text-lg text-muted-foreground italic">
            "For where two or three gather in my name, there am I with them."
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            — Matthew 18:20
          </p>
        </div>
      </div>
    </section>
  );
}
