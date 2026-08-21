import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date?: string;
  imageUrl?: string;
  link?: string;
  linkText?: string;
}

export default function EventCard({ title, description, date, imageUrl, link, linkText = "Learn More" }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-200">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            data-testid={`img-event-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      )}
      <CardHeader>
        {date && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <span data-testid={`text-event-date-${title.toLowerCase().replace(/\s+/g, '-')}`}>{date}</span>
          </div>
        )}
        <CardTitle className="font-serif" data-testid={`text-event-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base" data-testid={`text-event-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </CardDescription>
        {link && (
          <Button
            variant="outline"
            asChild
            data-testid={`button-event-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {linkText}
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
