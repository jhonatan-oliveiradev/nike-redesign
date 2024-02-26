import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen max-h-[600px] flex-col items-center justify-center">
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
    </section>
  );
};

export default HeroSection;
