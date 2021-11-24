<script>
  export let title
</script>  

<div class="border-button">
  <h3>{title}</h3>
</div>

<style>
  .border-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #A2AAB2;
    width:260px;
    height:54px;
    margin-bottom: 33px;
    transition:200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    text-decoration: none;
  }

  .border-button:hover {
    transition:200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    background: none;
  }
  h3 { 
    color: #212121;
    font-size:26px;
    font-family: 'Inter';
    font-weight:bold;
  } 

  @media (min-width: 1000.01px) and (max-width: 1550px) { 
    h3 { font-size: 20px; }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) { 
    h3 { font-size: 14px; }
  }
  @media screen and (max-width: 800px) { 
    .border-button { 
      width:128px;
      height:35px;
      margin-bottom:15px;
    }
    h3 { font-size:12px; }
  }
</style>