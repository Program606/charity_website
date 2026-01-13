import { ProjectImageItem } from "@/components/ProjectImage/ProjectImageItem";
export function ProjectImage() {
  return (
    <>
      <section className="w-full flex items-center justify-center text-center mb-4">
        <ProjectImageItem />
        <ProjectImageItem />
        <ProjectImageItem />
      </section>
    </>
  );
}
