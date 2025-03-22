import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "../../data/sections/partners.json";

const PartnersSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 0,
    focusOnSelect: true,
    speed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    adaptiveHeight: false,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="mil-partners mil-p-90-60">
      <div className="container">
        <Slider {...settings}>
          {Content.items.map((item, index) => (
            <div key={`partners-i-${index}`} className="mil-partners-frame">
              <Link
                href={item.link}
                style={{
                  objectFit: "contain",
                  width: "160px",
                  aspectRatio: 3 / 2,
                  mixBlendMode: "color-burn",
                  ...item,
                }}
              >
                <img src={item.image} alt={item.alt} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersSection;
