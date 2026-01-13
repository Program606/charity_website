import { CurrProjectItem } from "@/components/CurrProject/CurrProjectItem";
import type { ProjectProp } from "@/components/CurrProject/projectTypes";
import { projectPropList } from "@/components/CurrProject/projectTypes";

export function CurrProject() {
  return (
    <>
      <section className="w-full mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectPropList.map((activity: ProjectProp) => (
            <CurrProjectItem
              key={activity.title}
              src={activity.src}
              alt={activity.alt}
              year={activity.year}
              month={activity.month}
              title={activity.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
