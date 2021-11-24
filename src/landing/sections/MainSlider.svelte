<script>
  import { onMount } from "svelte";

  import { Navigation, Pagination, Lazy } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  import "swiper/css";
  import "swiper/css/lazy";
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  export let images;

  let w;
  let loading;
  let slider_per_view = 1;
  let lazy_load = true;

  onMount(async () => {
    loading = true;
  });

  $: if (w > 1025) {
    slider_per_view = 2;
  } else {
    slider_per_view = 1;
  }

  $: if (w > 1025) {
    lazy_load = false;
  } else {
    lazy_load = true;
  }
</script>

<div class="main-slider" bind:clientWidth={w}>
  {#if loading}
    <Swiper
      modules={[Navigation, Pagination, Lazy]}
      spaceBetween={30}
      slidesPerView={slider_per_view}
      navigation
      centeredSlides={true}
      lazy={lazy_load}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {#each images as image}
        <SwiperSlide>
          <!-- svelte-ignore a11y-missing-attribute -->
          {#if lazy_load}
            <img data-src="/images/{image.src}" class="swiper-lazy" />
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
          {:else}
            <img src="/images/{image.src}" alt="НКУ" class="swiper-lazy" />
          {/if}
        </SwiperSlide>
      {/each}
    </Swiper>
  {/if}
</div>

<style>
  .main-slider {
    width: 100%;
    height: 609px;
  }

  @media screen and (max-width: 800px) {
    .main-slider {
      height: 239px;
    }
  }
</style>
