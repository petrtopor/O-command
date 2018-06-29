<template>
  <div class="container">
				<nav>
					<ul class="menu">
						<li><router-link class="fo home" :to="{ name: 'Home'}"><span>Главная</span></router-link></li>
						<li><router-link class="fo calendar" :to="{ name: 'Calendar'}"><span>План блюд</span></router-link></li>
						<li><router-link class="fo cart" :to="{ name: 'Cart'}"><span>Продукты</span></router-link></li>
						<li><router-link class="fo book" :to="{ name: 'Book'}"><span>Рецепты</span></router-link></li>
						<li><router-link class="fo qrcode" :to="{ name: 'Qrcode'}"><span>QR-код</span></router-link></li>
					</ul>
				</nav>
  </div>
</template>

<script>
	export default {
	  name: 'Footer'
	}
</script>

<style src="../assets/style.css">
</style>