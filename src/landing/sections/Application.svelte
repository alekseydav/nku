<script>
  import { navigating, page} from '$app/stores';
  import Button from '../blocks/Button.svelte';

  export let title

  let name = ''
  let tel = ''
  let files
  let fileName = ''
  let empty_tel = false
  let error = ''

  function showFile(){
    if(files.length > 1){
      fileName = `выбрано ${files.length} файла`  
    } else if (files.length == 1){
      fileName = files[0].name
    } else {
      fileName = ''
    }
  }

  function clearForm(){
    name = ''
    tel = ''
    files = []
    fileName = ''
  }

  async function handleSubmit(event){ 
    if(tel.length == 0){
      empty_tel = true
      return
    }

    let formData = new FormData(event.target)
    
    formData.append('images', images);
    formData.append('name', name);
    formData.append('tel', tel);
    formData.append('title', title);
    formData.append('location', $page.host);

    try {
      const options = {
        method: 'POST',
        body: formData
      };
      
      const path = '/send/add';
      const res = await fetch(path, options);
      const result = await res.json();
      
      if (!res.ok) throw new Error(result.error)
      
    } catch (e) {
      error = e.message;
    }

    clearForm()
  }
</script>

<div id="application">
  <div class="application">
    <div class="section-title-block">
      <div class="section-title">
        <div class="line"></div>
        <h2>Оставьте заявку</h2>
      </div>
      <div class="section-text">
        <p>Мы с вами свяжемся и проконсультируем. Рассчитаем стоимость проекта, подберем оборудование, отправим коммерческое предложение.</p>
      </div>
    </div>

    <form class="form" on:submit|preventDefault="{handleSubmit}" enctype="multipart/form-data">
      <div class="input-block">
        <input type="text" placeholder="Имя (необязательно)" name="name" id="name" bind:value={name}> 
      </div>
      <div class="input-block">
        <input type="text" class:empty_tel placeholder="Номер телефона" id="tel" name="tel" bind:value={tel}> 
      </div> 
      <div class="block-button">
        <Button title="Оставить заявку" target="false" />
      </div>  
      <div class="file">
        <label for="images">
          <input type="file" bind:files id="images" name="images" multiple on:change={showFile}/> 
          <div class="file-item">
            <p>Прикрепить проект</p> 
            <span><img src="/images/file.svg" alt="file"></span>
            <span class="fileName">{fileName}</span>
          </div>
        </label>
      </div>
    </form>
  </div>
</div>

<style>
  #application {
    width:100%;
    padding:3rem 0 7rem 0;
  }
  .application {
    width:1110px;
    margin:0 auto;
    padding:3rem 0 7rem 0;
  } 

  .section-text { width:450px; }

  .form { 
    width:100%; 
    display: flex;
    justify-content: space-between;
  }

  .input-block { width:405px; margin-bottom:15px; }
  
  .input-block input {
    border: 1px solid #a2aab2;
    height: 70px;
    padding-left: 30px;
    width: 100%;
    font-size: 20px;
    color: #A2AAB2;
    background: transparent;
  }

  .empty_tel { border: 2px solid red !important; }

  .block-button { width:240px; height: 70px; }

  #images { display: none; }
  input[type="file"] { display: none; }
  input[type="file" i] { display: block; }
  .file-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 150%;
    color: #2b2b2b;
  }
  .file-item p { margin:0; }
  .file span {
    margin-left: 10px;
    position: relative;
    top: 3px;
  }
  .fileName { font-size:14px; margin-top:-.5rem; }

  .form { display: flex; flex-wrap: wrap; }

  @media (min-width: 1250.01px) and (max-width: 1550px) {
    #application { width:100%; }
    .application { width:1110px; padding:20px 47px 0 47px; }
    .input-block { width:332px; height:59px; }
    .block-button { width:206px; height:59px; }
    .input-block input { height:59px; }
  }
  @media (min-width: 1000.01px) and (max-width: 1250px) {
    .application { width:100%; padding:20px 45px 0 45px; }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) { 
    .application { width:100%; padding:20px 45px 0 45px; }
    .input-block { width:324px; }
    .input-block input { height:59px; width:324px; font-size: 14px; }
    .block-button { width:177px; height:59px; }
  }
  @media screen and (max-width: 800px) { 
    #application { width:100%; padding:0 15px; margin:40px auto 30px auto; }
    .application { width:100%; padding:10px 0 35px 0; }
    .section-text { width:100%; }
    .input-block { width:100%; height:50px; }
    .input-block input { height:50px; font-size: 14px; }
    .form { display: flex; flex-wrap: wrap; align-items: center; flex-direction: column;}
    .block-button { width:177px; height:59px; margin-top:20px; order:2; }  
    .file { margin-top: 0px; }
    .file-item p { font-size:12px; }
    .fileName { font-size:11px; }
  }
</style>