<script>
	import Button from '../blocks/Button.svelte';
</script>

<footer>
	<div class="footer">
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
		<div class="btn-block">
			<Button title="Отправить заявку" />
		</div>
	</div>
</footer>

<style>
	footer {
		width:100%;
		padding:25px 0;
		background: #EBEBEB;
	}
	.footer {
		margin:0 auto;
		width:1110px;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	
	.btn-block {
		width:240px;
		height:70px;
	}

	@media (min-width: 1000.01px) and (max-width: 1550px) { 
		.footer { width:100%; padding:5px 47px; }
		.logo {	
			width:171px;
			height:59px;
		}
		.btn-block {
			width:206px;
			height:59px;
		}
		nav a { font-size:16px; }
	}

	@media (min-width: 800.01px) and (max-width: 1000px) { 
		.footer { width:100%; padding:0px 47px; }
		.btn-block {
			width:177px;
			height:50px;
		}
		.logo {	
			width:145px;
			height:50px;
		}
		nav a { font-size:14px; }
	}

	@media screen and (max-width: 800px) { 
		footer { padding: 0 0 25px 0; }
		.footer { width:100%; padding:0 15px; flex-wrap: wrap; } 
		nav { order:0; width:100%; }
		nav a { font-size:12px; padding: 0;}
		.logo { order:1; width:87px; height:30px; }
		.btn-block { 
			order:2; 
			width:177px;
			height:50px;
		}
	}
</style>