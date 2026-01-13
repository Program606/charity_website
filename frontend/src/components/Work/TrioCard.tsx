import { CardItem } from "@/components/Work/CardItem";
import type {TrioProp} from "@/components/Work/trioTypes"
import { valuesTrioList} from "@/components/Work/trioTypes";
export function TrioCard() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-4 py-10 shadow-lg rounded-lg">
        {valuesTrioList.map((value: TrioProp) =>(
          <CardItem icon={value.icon} title={value.title} descr={value.descr}/>
        ))}
      </section>
    </>
  );
}
