// components/Carousel.tsx

// Importações necessárias (continuam as mesmas)
import React from 'react';
import Link from 'next/link';
import Image from '../lib/Image'; // Usando seu componente de imagem customizado

// Importando os módulos e estilos do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// O componente agora não recebe mais props
const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      style={{ width: '100%' }}
      className="main-carousel"
    >
      {/* ===== SLIDE 1: BOAS-VINDAS (Texto e imagem definidos diretamente aqui) ===== */}
      <SwiperSlide>
        <section className="banner pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="mb-3">PET Elétrica UFBA</h1>
                <p className="mb-4">
                  PET é a sigla para Programa de Educação Tutorial, um programa ligado
                  ao Ministério da Educação (MEC) que conta com um grupo de estudantes,
                  sob a orientação de um(a) tutor(a), que desenvolve ações que
                  contribuem para uma formação universitária mais ampla. As atividades
                  realizada por eles são orientadas por três pilares:{" "}
                  <b>Ensino, Extensão e Pesquisa</b> O PET Elétrica UFBA nasceu em
                  Agosto de 2008 contando inicialmente com 4 estudantes. Desde então,
                  o grupo cresceu e atualmente impacta o ambiente acadêmico do curso
                  de Engenharia Elétrica com atividades como Pré-Física, ABC da
                  Engenharia, Grupo de Empoderamento Feminino entre outras. Além
                  disso, com a realização de eventos como Conexão PET e com o nosso
                  canal no Youtube é possível contribuir para além dos muros da
                  Universidade.
                </p>
                <div className="img-fluid mt-5">
                  <Image 
                    src="/images/banner-art.svg" 
                    alt="Arte do banner PET Elétrica"
                    layout="responsive"
                    height="40%" 
                    width="100%"
                    objectFit="scale-down"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* ===== SLIDE 2: PROCESSO SELETIVO ===== */}
      <SwiperSlide>
        <section className="section d-flex align-items-center" style={{ minHeight: '80vh' }}>
          <div className="bg-gray container section shadow rounded-lg px-4">
            <div className="row align-items-center justify-content-center text-center text-md-left">
              <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                <div className="img-fluid">
                  <Image src="/images/cta.svg" alt="Ilustração do Processo Seletivo" layout='responsive' width="100%" height="100%" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <h2 className="section-title">Pronto para se juntar a nós?</h2>
                <p className="mb-4">
                  Confira as informações de como funciona o nosso processo seletivo.
                </p>
                <Link href="/prosel" passHref>
                  <a title="Processo Seletivo" className="btn btn-primary">
                    Processo Seletivo
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

    </Swiper>
  );
};

export default Carousel;
