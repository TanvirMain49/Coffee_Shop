import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { SparklesIcon } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Badge } from "./badge";

export const CardSwipe = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
.swiper {
  width: 60%;
  height: 620px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  height: 100%; /* Ensure slides take full height */
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%; /* Make images fill the slide */
  object-fit: cover; /* Maintain aspect ratio */
}
`;
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="w-full max-w-4xl rounded-[24px] md:rounded-t-[44px]">
        <div className="flex w-full items-center justify-center gap-4">
          <div className="w-full">
            <Swiper
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
              }}
              effect={"cards"}
              grabCursor={true}
              loop={true}
              slidesPerView={"auto"}
              rewind={true}
              cardsEffect={{
                slideShadows: slideShadows,
              }}
              modules={[EffectCards, Autoplay, Pagination, Navigation]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="size-full rounded-3xl">
                    <img
                      src={image.src}
                      className="h-full w-full rounded-xl object-cover"
                      alt={image.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="size-full rounded-3xl">
                    <img
                      src={image.src}
                      className="h-full w-full rounded-xl object-cover"
                      alt={image.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
