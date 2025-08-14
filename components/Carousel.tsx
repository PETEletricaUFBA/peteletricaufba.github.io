// components/Carousel.tsx

import React from 'react';
import Link from 'next/link';
import Image from '../lib/Image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      style={{ width: '100%' }}
      className="main-carousel"



>
      {/* ===== SLIDE 1: BOAS-VINDAS ===== */}
      <SwiperSlide className="h-100">
        <section className="section d-flex align-items-center h-100" style={{ minHeight: '80vh' }}>
          <div className="bg-gray container section shadow rounded-lg px-4 h-100">
            <div className="row align-items-center justify-content-center text-center text-md-left h-100">
              
              <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                <h2 className="section-title">PET Elétrica UFBA</h2>
                <p className="mb-4 text-justify">
                  PET é a sigla para Programa de Educação Tutorial, um programa ligado
                  ao Ministério da Educação (MEC) que conta com um grupo de estudantes,
                  sob a orientação de um(a) tutor(a), que desenvolve ações que
                  contribuem para uma formação universitária mais ampla. As atividades
                  realizada por eles são orientadas por três pilares:{" "}
                  <b>Ensino, Extensão e Pesquisa</b>.
                </p>
                <div className="mt-auto">
                  <Link href="/team" passHref>
                    <a title="Conheça nosso time" className="btn btn-primary">
                      Conheça o nosso Time
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <div className="img-fluid">
                  <Image 
                    src="/images/banner-art.svg" 
                    alt="Arte do banner PET Elétrica"
                    layout='responsive' 
                    width="100%" 
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>




      {/* ===== SLIDE 2: PROCESSO SELETIVO ===== */}
      <SwiperSlide className="h-100">
        <section className="section d-flex align-items-center h-100" style={{ minHeight: '80vh' }}>
          <div className="bg-gray container section shadow rounded-lg px-4 h-100">
            <div className="row align-items-center justify-content-center text-center text-md-left h-100">

              <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                <div className="img-fluid">
                  <Image 
                    src="/images/cta.svg" 
                    alt="Ilustração do Processo Seletivo" 
                    layout='responsive' 
                    width="100%" 
                    height="100%" 
                  />
                </div>
              </div>

              <div className="col-lg-5 col-md-6 d-flex flex-column justify-content-center">
                <h2 className="section-title">Pronto para se juntar a nós?</h2>
                <p className="mb-4 text-justify">
                  Confira as informações de como funciona o nosso processo seletivo.
                </p>
                <div className="mt-auto">
                  <Link href="/prosel" passHref>
                    <a title="Processo Seletivo" className="btn btn-primary">
                      Processo Seletivo
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;