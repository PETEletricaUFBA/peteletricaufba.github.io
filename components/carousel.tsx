// components/Carousel.tsx
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from '../lib/Image';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import imagemPetAulas from '../public/images/carousel/petAulas.png';
import imagemEbookmulhers from '../public/images/carousel/mulherespoli.png';
import imagemManualCalouro from '../public/images/carousel/manual-calouro.png';

// Exemplo de vídeo local: coloque em /public/videos/
// ex: /public/videos/minicursos.mp4

const Carousel = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'Manual do Calouro',
      text: '✨⚡ Manual do Calouro ✨⚡- O Manual do Calouro foi criado para te acompanhar nos primeiros passos da vida universitária, reunindo orientações essenciais, dicas práticas feita por quem tem experiência e já passou por esse caminho, para que você se sinta mais seguro, aproveite melhor as oportunidades e comece essa nova fase com confiança e entusiasmo!',
      type: 'image',
      image: imagemManualCalouro,
      buttonText: 'Acesse já!',
      buttonLink: '/manual-calouro',
    },
    {
      title: 'Participe das nossas aulas',
      text: 'Venha conhecer nossas aulas abertas e eventos especiais.',
      type: 'image',
      image: imagemPetAulas,
      buttonText: 'Vem aprender',
      buttonLink: '/cursos',
    },
    {
      title: 'Mulheres da Escola Politécnica',
      text:
        'Depois de muito trabalho e muito esforço, estamos oficialmente lançando o livro: Mulheres da Escola Politécnica da UFBA!',
      type: 'image',
      image: imagemEbookmulhers,
      buttonText: 'Ebook aqui',
      buttonLink: '/atividades/GPEF',
    }
  ];

  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        onSlideChange={(swiper: SwiperType) =>
          setActiveIndex(swiper.realIndex)
        }
        className="carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="carousel-slide">
              <div className="container bg-gray section shadow rounded-lg px-4">
                <div className="row align-items-center text-center justify-content-center">
                  {/* Mídia */}
                  <div className="col-lg-6 col-md-6 col-10 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                    <div
                      className="carousel-image-container"
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '300px',
                      }}
                    >
                      {<Image
                          src={slide.image}
                          alt={slide.title}
                          layout="fill"
                          objectFit="contain"
                        />
                      }
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center text-start text-center text-md-start mx-auto">
                    <h2 className="section-title">{slide.title}</h2>
                    <p className="mb-4">{slide.text}</p>

                    <Link href={slide.buttonLink} passHref>
                      <a
                        className="btn btn-primary carousel-btn mx-auto mx-md-0"
                        target={
                          slide.buttonLink.startsWith('http')
                            ? '_blank'
                            : '_self'
                        }
                        rel={
                          slide.buttonLink.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
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
            className={`carousel-pagination-dot ${
              activeIndex === idx ? 'active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
