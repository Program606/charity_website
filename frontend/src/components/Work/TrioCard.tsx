import { CardItem } from "@/components/Work/CardItem";
export function TrioCard() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-4 py-10 shadow-lg rounded-lg">
        <CardItem />
        <CardItem />
        <CardItem />
      </section>
    </>
  );
}
