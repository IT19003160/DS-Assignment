import { Carousel } from "antd";

const CarouselView = () => (
  <Carousel autoplay effect="fade">
    <div>
      <img
        src="https://i.ibb.co/Drv1sMn/1.jpg"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co/2vZZK2q/2.jpg"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co/4KQRNMy/3.jpg"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co/5xfLpkG/4.jpg"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  </Carousel>
);

export default CarouselView;
