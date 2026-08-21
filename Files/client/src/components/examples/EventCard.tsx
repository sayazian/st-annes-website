import EventCard from '../EventCard';

export default function EventCardExample() {
  return (
    <div className="max-w-md">
      <EventCard
        title="A Non-Musician's Guide to How Music Works"
        description="Join St. Anne's very own Dr. Aquilanti for an accessible and illuminating journey into the structure and emotional power of music. Designed for everyone!"
        date="Upcoming Series"
        link="https://zoom.us/j/94566733324?pwd=EwtmRFQzuf3ZdaoFe7nSe3zFh6jhQA.1"
        linkText="Join on Zoom"
      />
    </div>
  );
}
