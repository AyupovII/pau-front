import { Navigation, Autoplay, Thumbs, FreeMode, EffectCoverflow } from "swiper/modules"
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react"
import Image from "next/image"
import img from "../assets/img/cat.jpg"
import 'swiper/css';
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const CategorySwiper: React.FC = () => {
    const [activeThumb, setActiveThumb] = useState<SwiperClass>();
    const isLargeDevice = useMediaQuery(
        "only screen and (max-width : 1024px)"
    );
    return (
        <div className="flex flex-col gap-5 lg:flex-row-reverse">
            <Swiper
                modules={[Navigation, Autoplay, Thumbs, FreeMode, EffectCoverflow]}
                effect='coverflow'

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                // autoplay={{ delay: 3000 }}
                loop
                thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
                className="w-72"
            >
                <SwiperSlide className="w-52">
                    <Image
                        className="max-w-72 max-h-72 min-h-72 object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-52">
                    <Image
                        className="max-w-72 max-h-72 min-h-72 object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-52">
                    <Image
                        className="max-w-72 max-h-72 min-h-72 object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-52">
                    <Image
                        className="max-w-72 max-h-72 min-h-72 object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>

            </Swiper>
            <Swiper
                className={"flex max-h-72 max-w-72"}
                onSwiper={setActiveThumb}
                slidesPerView={3}
                freeMode
                direction={isLargeDevice ? "horizontal" : "vertical"}
                watchSlidesProgress
                spaceBetween={24}
                modules={[Navigation, FreeMode, Thumbs]}
            >
                <SwiperSlide className={""}>
                    <Image
                        className="max-w-[80px] max-h-[80px] min-h-[80px] object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide className={""}>
                    <Image
                        className="max-w-[80px] max-h-[80px] min-h-[80px] object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide className={""}>
                    <Image
                        className="max-w-[80px] max-h-[80px] min-h-[80px] object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide className={""}>
                    <Image
                        className="max-w-[80px] max-h-[80px] min-h-[80px] object-cover object-center"
                        src={img}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default CategorySwiper