import { Camera } from 'lucide-react';

export function CardItem() {
  return (
    <>
      <div className="flex-1 min-w-[200px] flex flex-col justify-center items-center text-center gap-1 m-6 px-3 py-12 rounded-lg">
        <Camera color="red" size={48} />
        <h2 className="font-bold text-lg">Strengthen Core Reading Skills</h2>
        <p className="font-semibold text-lg">We help children build essential literacy foundations—phonics, vocabulary, comprehension, and fluency—through structured reading sessions and personalized guidance.</p>
      </div>
    </>
  );
}
