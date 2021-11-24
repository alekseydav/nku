<script>
  import AboutBlock from "../blocks/AboutBlock.svelte";

  export let about;
</script>

<div id="about">
  <div class="section-title-block">
    <div class="section-title">
      <div class="line" />
      <h2>{about[0].header.title}</h2>
    </div>
    <div class="section-text">
      <p>{about[0].header.text}</p>
    </div>
  </div>

  <div class="about-blocks">
    {#each about[1].items as block}
      <AboutBlock {block} />
    {/each}
  </div>
</div>

<style>
  #about {
    width: 1110px;
    margin: 131px auto 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .about-blocks {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1150.01px) and (max-width: 1550px) {
    #about {
      width: 1110px;
      padding: 0 47px;
    }
  }
  @media (min-width: 1000.01px) and (max-width: 1150px) {
    #about {
      width: 100%;
      padding: 0 47px;
    }
    .about-blocks {
      justify-content: space-around;
    }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) {
    #about {
      width: 100%;
      padding: 0 45px;
      margin: 90px auto 30px auto;
    }
  }
  @media screen and (max-width: 800px) {
    #about {
      width: 100%;
      padding: 0 15px;
      margin: 0 auto 30px auto;
      padding-top: 50px;
    }
  }
</style>
