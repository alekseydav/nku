<script>
  export let block 
</script>

<div class="about-block">
  <div class="icon">
    <img src="/images/{block.icon}" alt="{block.title}">
  </div>
  <div class="title">
    {block.title}
  </div>
</div>  

<style>
  .about-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:200px;
    width:350px;
    margin-bottom:30px;
    border:1px solid #ccc;
  }  
  .icon {
    width:60px;
    height:60px;
  }
  .title {
    font-weight: 700;
    font-size:20px;
    line-height: 24px;
    color:#2B2B2B;
    padding:2rem 1rem 0 1rem;
    text-align: center;
  }

  @media (min-width: 1000.01px) and (max-width: 1550px) {
    .about-block { width:290px; }
    .title { font-size:16px; line-height: 19px; } 
  }
  @media (min-width: 00.01px) and (max-width: 1050px) {
    .about-block { width:320px; }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) { 
    .about-block { width:324px; }
  }
  @media screen and (max-width: 800px) { 
    .about-block { width:100%; margin: 0 auto 30px auto;}
    .title { font-size:14px; line-height: 19px; } 
  }
</style>