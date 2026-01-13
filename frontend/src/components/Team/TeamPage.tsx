import { TeamPageItem } from "@/components/Team/TeamPageItem";
export function TeamPage() {
  return (
    <section className="flex flex-col mx-15">
      <div className="flex-1/5 flex flex-row justify-between items-center ">
        <h2 className="font-bold text-3xl">The Executives</h2>
        <hr className="my-4 border-yellow-300"></hr>
      </div>
      <div className="flex-4/5 flex md:flex-row sm:flex-col  justify-start text-left">
        <TeamPageItem />
        <TeamPageItem />
        <TeamPageItem />
      </div>
    </section>
  );
}
