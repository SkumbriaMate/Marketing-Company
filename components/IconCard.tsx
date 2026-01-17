import { ReactNode } from "react";

interface IconCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
}

export default function IconCard({
  icon,
  title,
  description,
}: IconCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
