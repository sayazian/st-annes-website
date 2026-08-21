import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Mail, DollarSign, Gift } from "lucide-react";

export default function Donation() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="give">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif" data-testid="text-donate-title">
              Support Our Ministry
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your generous contributions help us serve our community, maintain our facilities, 
            and spread God's love through worship, outreach, and ministry programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">Online Giving</CardTitle>
              <CardDescription>
                Make a secure donation through PayPal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                className="space-y-4"
                data-testid="form-donation"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="office@stanneschurch.org" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="item_name" value="St. Anne's Episcopal Church Donation" />
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    One-time or recurring donations accepted
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors"
                    data-testid="button-donate-paypal"
                  >
                    <Gift className="inline h-4 w-4 mr-2" />
                    Donate with PayPal
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">Other Ways to Give</CardTitle>
              <CardDescription>
                Additional options for supporting St. Anne's
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mail a Check</h4>
                  <p className="text-sm text-muted-foreground">
                    St. Anne's Episcopal Church<br />
                    2791 Driscoll Road<br />
                    Fremont, CA 94539
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">In-Person Giving</h4>
                  <p className="text-sm text-muted-foreground">
                    Offering plates are available during Sunday services. 
                    You may give cash or check.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Planned Giving</h4>
                  <p className="text-sm text-muted-foreground">
                    For information about legacy gifts, bequests, or memorial donations, 
                    please contact our office.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <p className="font-semibold">Tri-City Interfaith Council Membership Dues</p>
              <p className="text-sm text-muted-foreground">
                If you're making a donation for Tri-City Interfaith Council membership dues, 
                please use the PayPal option above and then email{" "}
                <a href="mailto:office@stanneschurch.org" className="text-primary hover:underline">
                  office@stanneschurch.org
                </a>{" "}
                to let us know. Thank you for your support!
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            "Each of you should give what you have decided in your heart to give, 
            not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            — 2 Corinthians 9:7
          </p>
        </div>
      </div>
    </section>
  );
}
