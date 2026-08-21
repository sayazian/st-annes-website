import EventCard from "./EventCard";

export default function Events() {
  return (
    <section className="py-16 md:py-24" id="events">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4" data-testid="text-events-title">
            Upcoming Events & Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for worship, learning, and fellowship opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <EventCard
            title="A Non-Musician's Guide to How Music Works"
            description="Join St. Anne's very own Dr. Aquilanti for an accessible and illuminating journey into the structure and emotional power of music. Designed for everyone, this series will demystify the basic elements of music, transforming the way you listen!"
            date="Ongoing Series"
            link="https://zoom.us/j/94566733324?pwd=EwtmRFQzuf3ZdaoFe7nSe3zFh6jhQA.1"
            linkText="Join on Zoom"
          />
          <EventCard
            title="Sunday Morning Worship"
            description="Experience meaningful worship in our beautiful sanctuary. Morning Prayer services feature traditional Episcopal liturgy, beautiful music, and inspiring sermons. All are welcome!"
            date="Every Sunday at 10:00 AM"
            link="https://zoom.us/j/93548667568?pwd=YsPyWHlfttRyIlOI1kOabbQLknAiWC.1"
            linkText="Join on Zoom"
          />
        </div>
      </div>
    </section>
  );
}
