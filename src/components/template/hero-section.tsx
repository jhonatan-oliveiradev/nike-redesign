import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <div>
        <h1 className="hidden uppercase">The new 2023 Air Jordan</h1>
        <Image
          src="/hero-lettering.svg"
          alt="The new 2023 Air Jordan"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-0 top-16 -z-10 h-auto w-full"
        />
      </div>
      <Image
        src="/hero-product.png"
        alt="The new 2023 Air Jordan"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-[960px]"
      />
      <div className="mt-16 flex flex-col items-center justify-center">
        <h2 className="mb-6 text-6xl font-extrabold">Just do it</h2>
        <p className="text-md text-zinc-400">
          Captures messages that stands for more than just sport.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
