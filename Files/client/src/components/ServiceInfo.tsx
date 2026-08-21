import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ExternalLink } from "lucide-react";

export default function ServiceInfo() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-6 w-6 text-primary" />
              <CardTitle className="text-3xl md:text-4xl font-serif" data-testid="text-service-title">
                This Sunday's Service
              </CardTitle>
            </div>
            <CardDescription className="text-lg" data-testid="text-service-description">
              Last Sunday after Pentecost - Morning Prayer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg" data-testid="text-service-details">Service Details</h3>
                <p className="text-muted-foreground" data-testid="text-service-date">
                  Sunday, November 23rd
                </p>
                <p className="text-2xl font-bold text-primary" data-testid="text-service-time">
                  10:00 AM
                </p>
                <p className="text-sm text-muted-foreground">
                  Join us in person or on Zoom
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Quick Links</h3>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="default"
                    className="w-full justify-start"
                    asChild
                    data-testid="button-zoom"
                  >
                    <a href="https://zoom.us/j/93548667568?pwd=YsPyWHlfttRyIlOI1kOabbQLknAiWC.1" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Join on Zoom
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                    data-testid="button-bulletin"
                  >
                    <a href="https://docs.google.com/document/d/1-320EkmEDOINHZPRdTlcaY9eWQYZAltFFg6-r8x876o/" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Bulletin
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                    data-testid="button-readings"
                  >
                    <a href="https://docs.google.com/document/d/101OsqA2-Q7EdFtRyFVzv698cVgUS2yDP-IRhtmOPwWE/" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Readings
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
