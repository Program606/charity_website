import type { ProjectProp } from "@/components/CurrProject/projectTypes";

export function CurrProjectItem({ src, alt, year, month, title }: ProjectProp) {
  return (
    <div className="w-[87.5%] flex flex-col items-center gap-4 m-4">
      <div className="w-full h-62.5 overflow-hidden rounded-lg shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={src}
          alt={alt}
        />
      </div>
      <p className="text-sm text-gray-500">
        {year}, {month}
      </p>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
