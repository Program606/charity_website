import type { TrioProp } from "@/components/Work/trioTypes";
import {formatLucideIcon} from "@/util/formatters"

export function CardItem({icon, title, descr}: TrioProp) {
  return (
    <>
      <div className="flex-1 min-w-[200px] flex flex-col justify-center gap-1 m-6 px-3 py-12 rounded-lg bg-orange-100 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-center w-full">
          {formatLucideIcon(icon)}
        </div>
        <h2 className="font-bold text-lg text-center">
          {title}
        </h2>
        <p className="font-semibold text-lg text-start">
          {descr}
        </p>
      </div>
    </>
  );
}
