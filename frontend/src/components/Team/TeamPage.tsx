import { TeamPageItem } from "@/components/Team/TeamPageItem";
import type { ExecProp } from "@/components/Team/teamTypes";
import { execPropList } from "@/components/Team/teamTypes";

export function TeamPage() {

  return (
    <section className="flex flex-col mx-3.75">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-3xl">The Executive Team</h2>
        <hr className="flex-1 ml-4 border-yellow-300"></hr>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-4">
        {execPropList.map((exec: ExecProp) => (
          <div 
          key={exec.name}
          className="w-[70%] sm:w-[45%] lg:w-[28%]">
            <TeamPageItem src={exec.src} alt={exec.alt} name={exec.name} year={exec.year} degree={exec.degree} descr={exec.descr}/>
          </div>
        ))}
      </div>
    </section>
  );
}
