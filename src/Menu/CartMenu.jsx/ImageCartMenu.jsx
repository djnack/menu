import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const ImageCartMenu = ({ images }) => {

    return (<>
        <Swiper pagination={true} modules={[Pagination]} style={{ marginTop: '-16px' }} className="mySwiper p-0">
            {images.map(e =>
                <SwiperSlide key={Math.random()} ><img src={e} width={window.screen.width+ 'px'} alt={e} /></SwiperSlide>
            )}
        </Swiper>
    </>);
}

export default ImageCartMenu;

