import IconCard from "./IconCard";

interface Service {
  title: string;
  description: string;
}

interface ServiceBlockProps {
  services: Service[];
}

export default function ServiceBlock({ services }: ServiceBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <IconCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
