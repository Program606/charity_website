import { lucideIcons } from "@/components/Work/trioTypes";
export function formatYear(year: number) {
  if (year === 1) return "1st";
  if (year === 2) return "2nd";
  if (year === 3) return "3rd";
  return `${year}th`;
}

export function formatLucideIcon(icon: string) {
  const IconComponent = lucideIcons[icon.toLowerCase()];
  if (!IconComponent) return null;

  return <IconComponent size={48} color="red" />;
}
