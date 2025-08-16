import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Ad = {
  id: string;
  headline: string;
  sub: string;
  img: string;
  cta: string;
  href: string;
};

const ADS: Ad[] = [
  {
    id: "1",
    headline: "Zero-Fee Transfers (Promo)",
    sub: "Send money to SA & UK fast and securely.",
    img: "https://picsum.photos/id/1015/1200/450",
    cta: "Start Sending",
    href: "/send",
  },
  {
    id: "2",
    headline: "Best Rates, Always",
    sub: "Transparent fees and great FX rates for parents & students.",
    img: "https://picsum.photos/id/1005/1200/450",
    cta: "See Rates",
    href: "/rates",
  },
  {
    id: "3",
    headline: "Track Every Transfer",
    sub: "Real-time status updates on web & mobile.",
    img: "https://picsum.photos/id/1005/1200/450",
    cta: "View Dashboard",
    href: "/dashboard",
  },
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-full md:pt-32">
      <Slider {...settings}>
        {ADS.map((ad) => (
          <div key={ad.id} className="h-full">
            <article className="relative h-full flex items-center rounded-2xl overflow-hidden">
              <img
                src={ad.img}
                alt={ad.headline}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 flex h-full items-center p-6 md:p-10">
                <div className="max-w-xl text-white">
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {ad.headline}
                  </h3>
                  <p className="mt-2 text-sm md:text-base opacity-90">
                    {ad.sub}
                  </p>
                  <a
                    href={ad.href}
                    className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-white text-gray-900 hover:bg-gray-100"
                  >
                    {ad.cta}
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
}
