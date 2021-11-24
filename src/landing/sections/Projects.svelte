<script>
  import ButtonBorder from '../blocks/ButtonBorder.svelte';

  import { Navigation, Lazy } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  import 'swiper/css';
  import "swiper/css/lazy";
  import 'swiper/css/navigation';

  export let projects
</script>

<div id="projects">
  <div class="projects">
    <div class="section-title-block">
      <div class="section-title">
        <div class="line"></div>
        <h2>{projects[0].header.title}</h2>
      </div>
    </div>
  </div>

  <div class="projects-slider">
    <Swiper
        modules={[Navigation, Lazy]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        lazy={true}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {#each projects[1].items as project}
          <SwiperSlide>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img data-src="/images/{project.src}" class="swiper-lazy project-img" />
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>

            <div class="description-block">
              <div class="details">
                <ButtonBorder title={project.link_name} />
                <p><span class="inter">Дата:</span> {project.date}</p>
                <p><span class="inter">Сайт:</span> {project.site}</p>
                <p><span class="inter">Адрес:</span> {project.address}</p>
              </div>
              <div class="text">
                {project.text}
              </div>
            </div>
          </SwiperSlide>
        {/each}
    </Swiper>
  </div>
</div>

<style>
  #projects {
    width:100%;
    margin:130px auto 0 auto;
    background: #E5E5E5;
    padding-bottom:100px;
  }
  
  .projects {
    width:1110px;
    margin:0 auto;
    padding-top:100px;
  }

  .projects-slider {
    width:calc(1110px + 240px);
    margin:10px auto 0px auto;
    height:870px;
  }

  .description-block {    
    width:1110px;
    margin-left:120px;
    margin-top:50px;
    height:300px;
    display: flex;
    justify-content: space-between;
  }

  .details {
    display:flex;
    flex-direction: column;
    width:50%;
  }
  
  .details p { margin:5px; font-size:20px; }
  .inter { font-weight:bold; font-family: 'Inter'; }

  .text { width:50%; }

  @media (min-width: 1000.01px) and (max-width: 1550px) {
    #projects { width:100%; }
    .projects { width:100%; padding:100px 47px 0 47px; }
    .projects-slider { width:100%; padding:10px 47px 0 47px; margin:10px auto 10px auto; } 
    .description-block { width:100%; padding:0; margin-left:0px; }
    .details p { margin:4px; font-size:16px; }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) { 
    #projects { width:100%; padding:0 47px; }
    .projects { width:100%; }
    .projects-slider { width:100%; }
    .description-block { width:100%; padding:0; margin-left:0px; }
    .details p { margin:4px; font-size:14px; }
    .text { font-size:14px; }
  }
  @media screen and (max-width: 800px) { 
    #projects { width:100%; padding:0 15px; margin:40px auto 0 auto; }
    .projects { width:100%; padding-top:40px; }
    .projects-slider { width:100%; height:570px; }
    .description-block { 
      flex-direction: column; 
      align-items: center; 
      justify-content: center;
      width:100%; 
      padding:0; 
      margin-top:0px;
      margin-left:0px; 
    }
    .details { width:100%; margin-bottom:15px;}
    .details p { margin:4px; font-size:12px; }
    .text { width:100%; padding:4px; font-size:12px; }
  }
</style>