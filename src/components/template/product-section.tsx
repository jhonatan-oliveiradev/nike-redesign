import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import SectionTitle from "../ui/general/section-title";

const cardItems = [
  {
    title: "Newcomer",
    img: "/img-01.png",
  },
  {
    title: "Men",
    img: "/img-02.png",
  },
  {
    title: "Women",
    img: "/img-03.png",
  },
  {
    title: "Kids",
    img: "/img-4.png",
  },
];

const ProductSection = () => {
  return (
    <section className="mb-14 flex flex-col items-center justify-center">
      <SectionTitle
        title="Just do it."
        description="Captures messages that stands for more than just sport."
      />
      <div className="flex items-center justify-between gap-20">
        {cardItems.map((item, index) => (
          <Card key={index} className="relative h-[386px] w-[294px]">
            <CardContent className="p-0">
              <Image
                src={item.img}
                alt={item.title}
                className="absolute h-full w-full"
                width={0}
                height={0}
                sizes="100vw"
              />
              <p
                className="absolute
                left-[50%]
                top-[50%]
                z-10
                -translate-x-1/2
                -translate-y-1/2
                text-center
                text-4xl
                tracking-wider
                text-white
              "
              >
                {item.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
