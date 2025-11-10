
interface TimelineProps {
  items: {
    date: string;
    title: string;
    description: string;
  }[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <div key={index} className="group relative flex items-center gap-4">
          <p className="text-muted-foreground shrink-0 text-sm">{item.date}</p>
          <p className="text-muted-foreground grow text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
