// components/Carousel.tsx
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from '../lib/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import imagemProsel from '../public/images/carousel/prosel.png';
import imagemPetAulas from '../public/images/carousel/petAulas.png';
import imagemEbookmulhers from '../public/images/carousel/mulherespoli.png';

const Carousel = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'Pronto para se juntar a nós?',
      text: 'Confira as informações de como funciona o nosso processo seletivo.',
      image: imagemProsel,
      buttonText: 'Processo Seletivo',
      buttonLink: '/prosel',
    },
    {
      title: 'Mulheres da Escola Politécnica',
      text: 'Depois de muito trabalho e muito esforço, estamos oficialmente lançando o livro: Mulheres da Escola Politécnica da UFBA!',
      image: imagemEbookmulhers,
      buttonText: 'Ebook aqui',
      buttonLink: '/atividades/GPEF',
    },
    {
      title: 'Participe das nossas aulas',
      text: 'Venha conhecer nossas aulas abertas e eventos especiais.',
      image: imagemPetAulas,
      buttonText: 'Vem aprender',
      buttonLink: '/cursos',
    },
  ];

  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="carousel-slide">
              <div className="container bg-gray section shadow rounded-lg px-4">
                <div className="row align-items-center text-center justify-content-center">
                  
                  {/* Imagem */}
                  <div className="col-lg-6 col-md-6 col-10 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                    <div className="carousel-image-container">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  {/* Texto e botão */}
                  <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center text-start">
                    <h2 className="section-title">{slide.title}</h2>
                    <p className="mb-4 text-justify">{slide.text}</p>
                    <Link href={slide.buttonLink} passHref>
                      <a className="btn btn-primary carousel-btn">
                        {slide.buttonText}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginação manual */}
      <div className="carousel-pagination">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`carousel-pagination-dot ${activeIndex === idx ? 'active' : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
