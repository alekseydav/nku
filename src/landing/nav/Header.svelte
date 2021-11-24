<script>
	import { fly, fade } from 'svelte/transition';
	import Button from '../blocks/Button.svelte';

	let open_menu = false
</script>

<header>
	<div class="logo">
		<a href="#top">
			<img src="/images/logo.svg" alt="логотип фирмы">
		</a>
	</div>
	<nav>
		<a href="#about">О компании</a>
		<a href="#projects">Проекты</a>
		<a href="#regards">Отзывы</a>
		<a href="#contacts">Контакты</a>
	</nav>
	<div class="nav-contacts">
		<a href="mailto:info@nku.su">info@nku.su</a>
		<a href="tel:+7-916-444-11-59">+7-916-444-11-59</a>
	</div>	
	<div class="btn-block">
		<Button title="Отправить заявку" />
	</div>
</header>

<div class="nav-mobile">
	<div class="menu" on:click={() => open_menu = true}>
		<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
	</div>
</div>

{#if open_menu}
	<div class="overflow" transition:fade="{{ duration: 500 }}" on:click={() => open_menu = false}></div>
	<div class="open-menu" transition:fly="{{ y: -100, duration: 500 }}">
		<div class="close" on:click={() => open_menu = false}>
			<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
		</div>
		<a href="#about" on:click={() => open_menu = false}>О компании</a>
		<a href="#projects" on:click={() => open_menu = false}>Проекты</a>
		<a href="#regards" on:click={() => open_menu = false}>Отзывы</a>
		<a href="#contacts" on:click={() => open_menu = false}>Контакты</a>
		<div class="nav-m-contacts">
			<a href="mailto:info@nku.su">
				<img src="/images/email.svg" alt="email"/> info@nku.su
			</a>
			<a href="tel:+7-916-444-11-59">
				<img src="/images/tel.svg" alt="tel"/> +7-916-444-11-59
			</a>
		</div>
	</div>
{/if}

<style>
	header {
		position: relative;
		top:0;
		left:0;
		z-index: 3;
		width:100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:25px 100px;
		background: #EBEBEB;
	}

	.logo {	
		width: 200px;
		height:69px;
	}
	.logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	nav {
		width:auto;
		height:50px;
		display: flex;
		justify-content: space-between;
	}
	nav a {
		display: flex;
		height: auto;
		align-items: center;
		padding: 0 1rem;
		color: #2B2B2B;
		font-weight: 400;
		font-size: 1.25rem;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: 'Roboto';
	}
	a:hover {
		color: var(--hover-link-color);
	}
	
	.nav-contacts {
		width:auto;
		display: flex;
		height:50px;
		justify-content: space-between;
		align-items: center;
		padding: 0 0 0 2rem;
	}
	.nav-contacts a { 
		font-family: 'Inter';
		font-weight: bold; 
		color: #2B2B2B;
		font-size: 1.25rem;
		padding: 0 1rem;

	}

	.btn-block {
		width:240px;
		height:70px;
	}

	.menu { 
		display:none; 
		position: absolute;
		top:1rem;
		left:1rem;
		z-index: 5;
		width:50px;
		height:40px;
		cursor: pointer;
	}
	.menu svg {
		width:100%;
		height:100%;
	}
	.menu:hover svg line { 
		stroke: var(--hover-link-color);
	}

	.overflow {
		position: fixed;
		top:0;
		left:0;
		height:100%;
		width:100%;
		background: rgba(0,0,0,0.3);
		z-index:0;
	}
	.open-menu {
		width:100%;
		position: absolute;
		top:0;
		left:0;
		padding: 3rem;
		z-index: 7;
		display: flex;
		flex-direction: column;
		align-items: center;
		background:#C5CBD2;
	}
	.open-menu a {
		font-size:1.2rem;
		padding:1rem;
		font-weight:bold;
		color: #111;
	}
	.close svg { 
		position: absolute;
		top:1rem;
		right:1rem;
		z-index: 9;
		width:50px;
		height:40px; 
		cursor: pointer;
	}
	.nav-m-contacts {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top:2rem;
		padding: 1.5rem 0;
		width:100%;
		border:1px solid #aaa;
	}
	.nav-m-contacts a {
		display: flex;
		align-items: center;
	}
	.nav-m-contacts img { 
		margin-right:15px;
	}

	@media (min-width: 1000.01px) and (max-width: 1550px) { 
		header { padding:25px 47px; }
		
		.btn-block {
			width:206px;
			height:59px;
		}
		.logo {	
			width:171px;
			height:59px;
		}
		nav a { font-size:16px; } 
		.nav-contacts a { font-size:16px; }
	}

	@media (min-width: 1000.01px) and (max-width: 1250px) { 
		nav { display: none; } 
		.menu { 
			display:block; 
			position: absolute;
			top:35px;
			left:240px;
			z-index: 5;
			width:50px;
			height:40px;
			cursor: pointer;
		}
		.nav-contacts {
			margin-right:0;
			padding: 0;
			width:57%;
			justify-content: flex-end;
		}
	}

	@media (min-width: 800.01px) and (max-width: 1000px) { 
		header { padding:25px 47px; }
		
		nav { display: none; }
		.btn-block {
			width:177px;
			height:50px;
		}
		.logo {	
			width:145px;
			height:50px;
		}
		.nav-contacts {
			margin-right:0;
			padding: 0;
			width:57%;
			justify-content: flex-end;
		}
		.nav-contacts a { font-size:14px; }
		.menu { 
			display:block; 
			position: absolute;
			top:30px;
			left:210px;
			z-index: 5;
			width:35px;
			height:40px;
			cursor: pointer;
		}
	}

	@media screen and (max-width: 800px) { 
		header { 
			position: fixed; 
			justify-content: center;
			padding:15px; 
		} 
		.logo { width:87px;	height:30px; }
		nav { display: none; }
		.btn-block { display: none; }
		.nav-contacts { display: none; }
		.open-menu { position: fixed; }
		.menu { 
			display:block; 
			position: fixed; 
			top:9px;
			left:15px;
			z-index: 5;
			width:35px;
			height:40px;
			cursor: pointer;
		}
		.close svg { 
			position: fixed; 
			top:9px;
			right:15px;
			z-index: 9;
			width:35px;
			height:40px;
			cursor: pointer;
		}
	}
</style>