import { Card } from "@/components/ui/card";
import type { ExecProp } from "@/components/Team/teamTypes";
import { formatYear } from "@/util/formatters";
export function TeamPageItem({ src, alt, name, year, degree, descr }: ExecProp) {
  return (
    <Card className="h-full overflow-hidden p-0">
      <img
        className="block h-64 object-cover"
        loading="lazy"
        src={src}
        alt={alt}
      />

      <div className="p-4 flex flex-col gap-2 text-left">
        <h2 className="font-bold text-2xl">{name}</h2>
        <h3 className="font-bold text-gray-400">{formatYear(year)} Year {degree}</h3>
        <p className="font-semibold">
          {descr}
        </p>
      </div>
    </Card>
  );
};
