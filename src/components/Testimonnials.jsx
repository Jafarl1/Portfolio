import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"


function Testimonnials() {

  let { customers, companies } = useSelector(state => state);

  return (
    <>
      <div className="testimonnials_page" id='testimonnials'>
        <div className="reviews">
          <div className="headline">
            <span className='line_span'>
              Testimonnials
            </span>
            <h1>
              Reviews by Clients
            </h1>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 95,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 0,
            }}
            speed={2000}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {
              customers.map(a => (
                <SwiperSlide key={a.id}>
                  <div className="customer">
                    <img src={a.image} alt="Customer photo" />
                    <div className="customer_info">
                      <h2>
                        {a.name}
                      </h2>
                      <span>
                        {a.prof}
                      </span>
                    </div>
                  </div>
                  <p className="comment">
                    {a.comment}
                  </p>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
      <div className="companies">
        {
          companies.map(e => (
            <div className="company" key={e.id}>
              <a href={e.link} target='_blank'>
                <img src={e.image} alt={e.alt} />
              </a>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Testimonnials