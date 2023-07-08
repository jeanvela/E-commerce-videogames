import Slider from "react-slick";
import style from '../../styles/Carrousel.module.css'

const Carrousel = (): JSX.Element => {

    const settings = {
        dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <section className={style.section_carrousel}>
            <div className={style.container}>
                <Slider {...settings} className={style.slider}>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/cWZlv5HCWi4sGKuwVRO4c8Xg.png" alt="" />
                    </div>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png" alt="" />
                    </div>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/cWZlv5HCWi4sGKuwVRO4c8Xg.png" alt="" />
                    </div>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png" alt="" />
                    </div>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/cWZlv5HCWi4sGKuwVRO4c8Xg.png" alt="" />
                    </div>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png" alt="" />
                    </div>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/cWZlv5HCWi4sGKuwVRO4c8Xg.png" alt="" />
                    </div>
                    <div className={style.img_container}>
                        <img className={style.img} src="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png" alt="" />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Carrousel