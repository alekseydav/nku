<script>
  export let title
  export let target = false
</script>  

{#if !target} 
  <a class="button" href="#application">{title}</a>
  {:else}
  <button class="button" type="submit">{title}</button>
{/if}

<style>
  .button {
    background: #BB1219;
    color:#FFF7F7;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    transition:200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    text-decoration: none;
    font-family: 'Inter';
    border:none;
  }

  .button:hover {
    transition:200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    background: #E33239;
    cursor: pointer;
  }

  @media (min-width: 1000.01px) and (max-width: 1550px) { 
    .button { font-size: 16px; }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) { 
    .button { font-size: 14px; }
  }
  @media screen and (max-width: 800px) { 
    .button { font-size: 14px; }
  }
</style>