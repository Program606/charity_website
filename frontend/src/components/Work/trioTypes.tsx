import { Camera, Book, Apple } from "lucide-react";
export interface TrioProp {
  icon: string;
  title: string;
  descr: string;
}
export const valuesTrioList: TrioProp[] = [
  {
    icon: "Camera",
    title: "Improved Literacy Skills",
    descr:
      "Reading builds vocabulary, strengthens comprehension, and enhances overall communication abilities.",
  },
  {
    icon: "Book",
    title: "Stronger Cognitive Development",
    descr:
      "Regular reading boosts imagination, critical thinking, and problem-solving skills essential for learning.",
  },
  {
    icon: "Apple",
    title: "Better Academic Confidence",
    descr:
      "Children who read consistently often gain confidence in class discussions and show improved performance across subjects.",
  },
];

export const lucideIcons: Record<string, React.ElementType> = {
  camera: Camera,
  book: Book,
  apple: Apple,
};