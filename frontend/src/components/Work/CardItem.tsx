import { Camera } from "lucide-react";

export function CardItem() {
  return (
    <>
      <div className="flex-1 min-w-[200px] flex flex-col justify-center gap-1 m-6 px-3 py-12 rounded-lg bg-orange-100 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-center w-full">
          <Camera color="red" size={48} />
        </div>
        <h2 className="font-bold text-lg text-center">
          Strengthen Core Reading Skills
        </h2>
        <p className="font-semibold text-lg text-start">
          We help children build essential literacy foundations—phonics,
          vocabulary, comprehension, and fluency—through structured reading
          sessions and personalized guidance.
        </p>
      </div>
    </>
  );
}
