import Image from "next/image";
import { Card, CardContent } from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const carouselItems = [
  {
    src: "/carousel-img-01.png",
    alt: "Featured 1",
  },
  {
    src: "/carousel-img-02.png",
    alt: "Featured 2",
  },
  {
    src: "/carousel-img-03.png",
    alt: "Featured 3",
  },
  {
    src: "/carousel-img-02.png",
    alt: "Featured 4",
  },
  {
    src: "/carousel-img-01.png",
    alt: "Featured 5",
  },
  {
    src: "/carousel-img-02.png",
    alt: "Featured 6",
  },
  {
    src: "/carousel-img-03.png",
    alt: "Featured 7",
  },
  {
    src: "/carousel-img-02.png",
    alt: "Featured 8",
  },
];

const FeaturedCarousel = () => {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <div className="p-0">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-full w-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col items-center justify-center gap-4 py-3 text-center">
        <p className="text-sm text-gray-500">
          (Photo by Joe Felix/Liverpool.co)
        </p>
        <span className="text-md">
          Liverpool’s Home & Away Kit 2022/2023 Season.{" "}
        </span>
      </div>
    </>
  );
};

export default FeaturedCarousel;
