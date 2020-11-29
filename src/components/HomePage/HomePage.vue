<template>
  <div>
      <NavMenu />
	  <VideoBackground />
  </div>
</template>

<script>
import VideoBackground from './VideoBackground.vue';
import NavMenu from '../Header/NavMenu.vue';

export default {
	name: 'HomePage',
	components: {
		
		VideoBackground,
		NavMenu,
	},

};
</script>

<style>

</style>
