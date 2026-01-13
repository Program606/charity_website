import { CurrProjectItem } from "@/components/CurrProject/CurrProjectItem";
import type { ProjectProp } from "@/components/CurrProject/projectTypes";
import { projectPropList } from "@/components/CurrProject/projectTypes";

export function CurrProject() {
  return (
    <>
      <section className="w-full flex items-center justify-center text-center mb-4">
        {projectPropList.map((activity: ProjectProp) => (
          <CurrProjectItem
            src={activity.src}
            alt={activity.alt}
            year={activity.year}
            month={activity.month}
            title={activity.title}
          />
        ))}
      </section>
    </>
  );
}
