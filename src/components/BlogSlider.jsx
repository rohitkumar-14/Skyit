import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom'
export default function BlogSlider() {
  const blogs = [
    {
      meta: "SMITH - 25 AUGUST - CONSTRUCTION",
      title: "Construction Technology",
      description:
        "Construction of itself, because it is pain because some proper style design",
      image: "/assets/images/blog/medium-size/1-1-370x260.jpg",
      link: "blog",
      comments: 35,
    },
    {
      meta: "DEVID - 20 AUGUST - ARCHITECTURE",
      title: "Construction Technology",
      description:
        "Construction of itself, because it is pain because some proper style design",
      image: "/assets/images/blog/medium-size/1-2-370x260.jpg",
      link: "blog",
      comments: 35,
    },
    {
      meta: "ETHAN - 18 AUGUST - RENOVATION",
      title: "Construction Technology",
      description:
        "Construction of itself, because it is pain because some proper style design",
      image: "/assets/images/blog/medium-size/1-3-370x260.jpg",
      link: "blog",
      comments: 35,
    },
  ];

  return (
    <div className="blog-area py-140">
      <div className="container">
        <div className="section-title-area style-01 pb-70">
          <div className="section-title-wrap">
            <div className="section-title with-border different-width text-start text-lg-end">
              <span>OUR BLOG</span>
              <h2 className="mb-0">Latest Post From Blog</h2>
            </div>
            <div className="section-desc">
              <p className="font-size-20 mb-0">
                Construction of itself, because it is pain, but because some
                proper style design occur in toil and pain pleasure we have
                expert team
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".blog-button-next",
                prevEl: ".blog-button-prev",
              }}
              pagination={{ el: ".blog-pagination", clickable: true }}
              loop={true}
              autoplay={{ delay: 5000 }}
              spaceBetween={20}
              slidesPerView={3} // ✅ Show 3 cards at a time
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                768: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
                1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop
              }}
              className="blog-slider"
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <div className="blog-item">
                    <Link className="blog-img" to={blog.link}>
                      <img
                        className="img-full"
                        src={blog.image}
                        alt={blog.title}
                      />
                    </Link>
                    <div className="blog-content">
                      <span className="blog-meta">{blog.meta}</span>
                      <h3 className="title mb-2">
                        <Link to={blog.link}>{blog.title}</Link>
                      </h3>
                      <p className="mb-4">{blog.description}</p>
                      <ul className="blog-button-wrap">
                        <li>
                          <Link className="btn btn-link p-0" to={blog.link}>
                            Read more
                          </Link>
                        </li>
                        <li>
                          <Link to="#">{blog.comments} Comments</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="blog-button-prev">
              <i className="ion-chevron-left"></i>
            </div>
            <div className="blog-button-next">
              <i className="ion-chevron-right"></i>
            </div>

            {/* Pagination (visible only on mobile) */}
            <div className="blog-pagination d-md-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
