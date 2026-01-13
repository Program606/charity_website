import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage?: string;
}

export function HeroSection({
  backgroundImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      {/* Darken Background */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="text-white/90 text-sm font-semibold tracking-widest uppercase mb-4">
            Student-Led Literacy Movement
          </p>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Help Children Discover the Power of Reading.
          </h1>

          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Every hour you spend tutoring or fundraising helps children gain
            access to books, dedicated tutors, and safe learning spaces. Join
            fellow students making a real difference in our communities.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-base font-semibold"
            >
              Join as a Volunteer
            </Button>

            <a
              href="#learn-more"
              className="text-white hover:text-white/80 transition-colors underline underline-offset-4 font-medium"
            >
              Learn how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
