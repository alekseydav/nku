<script>
  export let videos
</script>

<div id="regards">
  <div class="regards">
    <div class="section-title-block">
      <div class="section-title">
        <div class="line"></div>
        <h2>Отзывы</h2>
      </div>
    </div>

    <div class="videos">
      {#each videos as video}
        <div class="video">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/{video.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" bis_size=""></iframe>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  #regards { padding:60px 0; background: #E5E5E5; }
  .regards { width:1110px; margin:0 auto; }

  .videos { 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-bottom:30px;
  }
  .video { width:540px; }

  @media (min-width: 1250.01px) and (max-width: 1550px) {
    #regards { width:100%; }
    .regards { width:1110px; padding:0 47px 0 47px; }
    .videos { width:100%; }
    .video { width:450px; }
  }
  @media (min-width: 1000.01px) and (max-width: 1250px) { 
    .regards { width:100%; padding:0 45px 0 45px; }
    .video { width:400px; }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) { 
    #regards { width:100%; }
    .regards { width:100%; padding:100px 45px 0 45px; }
    .videos { width:100%; }
    .video { width:350px; }
  }
  @media screen and (max-width: 800px) { 
    #regards { width:100%; padding:30px 0; }
    .regards { width:100%; padding:0 15px; margin:30px auto 30px auto; }
    .videos { width:100%; flex-direction: column; margin-top:20px; }
    .video { width:100%; margin-bottom:20px; }
  }
</style>