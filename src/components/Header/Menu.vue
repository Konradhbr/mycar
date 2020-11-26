<template>
  <nav :class="{ 'overlay__menu': isMobile}" >
          <!-- <div class="main__menu "> -->
              <ul class="menu">
                  <li>
                      <a href="#">subpage1</a>
                  </li>
                  <li>
                      <a href="#">subpage2</a>
                  </li>
                  <li>
                      <a href="#">subpage3</a>
                  </li>
                  <li>
                      <a href="#">subpage4</a>
                  </li>
                  <li>
                      <a href="#">subpage5</a>
                  </li>
              </ul>
          <!-- </div> -->
    </nav>
</template>

<script>
export default {
	name: 'MobileMenu',
	data() {
		return {
			isMobile: false,
			
		};
	},
	mounted() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.getWindowWidth);

			this.getWindowWidth()
		})

	},

	methods: {
		// eslint-disable-next-line no-unused-vars
		getWindowWidth(event) {
			const windowWidth = document.documentElement.clientWidth;
			if(windowWidth < 1024) {
				this.isMobile = true
			}
			else {
				this.isMobile = false
			}
	  },
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.getWindowWidth);
		window.removeEventListener('resize', this.getWindowHeight);
	}
}
</script>

<style lang="scss" scoped>
$color_1: blue;
$color_2 :orange;
$color_3: rgba(250,250,250,0.5);

.overlay__menu {
	background: rgba(0, 0, 0, 0.95);
	color: $color_1;
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	height: 100%;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	width: 100%;
	padding: 50px 0;
	opacity: 0;
	text-align: center;
	transform: translateY(-100%);
	transition: all 0.5s;
	overflow: scroll;
	.main__menu {
		transition: all 0.7s;
		transition-delay: 0.7s;
		opacity: 1;
		transform: translateY(0%);
		&:nth-child(2) {
			transition-delay: 1.25s;
		}
	}
	&::-webkit-scrollbar {
		display: none;
	}
	ul {
		list-style: none;
		margin-top: 80px;
		padding: 0px;
		li {
			padding: 15px 0px;
			a {
				font-size: 24px;
				font-weight: 300;
				color: $color_2;
				text-decoration: none;
				transition: all 0.5s;
				&:hover {
					color: $color_3;
				}
			}
		}
	}
	p {
		margin-top: 60px;
		font-size: 13px;
		text-transform: uppercase;
		color: $color_2;
		font-weight: 200;
		letter-spacing: 0.5px;
		text-align: center;
	}
}
.-open {
	opacity: 1;
	transform: translateY(0%);
	padding-top: 50px;
	.main-menu {
		transition: all 0.7s;
		transition-delay: 0.7s;
		opacity: 1;
		transform: translateY(0%);
		&:nth-child(2) {
			transition-delay: 1.25s;
		}
	}
}

@media screen and (min-width: 1024px) {
$color_1: #777;
$color_2: #d94f5c;
$font_family_1: "Varela Round", sans-serif;

@keyframes line {
  0% {
    background-position-x: 390px;
  }
}

* {
	box-sizing: inherit;
	padding: 0;
	margin: 0;
	letter-spacing: 1.1px;
	&:before {
		box-sizing: inherit;
		padding: 0;
		margin: 0;
		letter-spacing: 1.1px;
	}
	&:after {
		box-sizing: inherit;
		padding: 0;
		margin: 0;
		letter-spacing: 1.1px;
	}
}
.menu {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 720px;
	margin: 0 auto;
	height: 80px;
	list-style: none;
	li {
		width: 125px;
		height: 50px;
		transition: background-position-x 0.9s linear;
		text-align: center;
		a { font-size: 22px;
		color: $color_1;
		text-decoration: none;
		transition: all 0.45s;
	}
}
& {
	&:hover {
		//background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
		animation: line 1s;
		a {
			color: $color_2;
		}
	}
	&:not(:last-child) {
		margin-right: 30px;
	}
}

 }
}
</style>
