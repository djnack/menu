import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

export default function SliderHeaderMenu() {
  return (
    <>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        freeMode={true}

        modules={[FreeMode]}
        className="mySwiper mx-1"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
          return <SwiperSlide>
            <div className="card border-0 rounded-4 bg-white px-2 pb-0">
              <img className="card-img-top pt-2" src={`/images/${e}.png`} alt="Card" />
              <div className="text-center end-cart m-0 p-0">
                <small className='fs-10'>pizza</small>
                <p className='mb-0'>پیتزا</p>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
