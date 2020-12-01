<template>
  <div>
      <NavMenu />
	  <VideoBackground />
	  <Text />
  </div>
</template>

<script>
import VideoBackground from './VideoBackground.vue';
import NavMenu from '../Header/NavMenu.vue';
import Text from './Text.vue';

export default {
	name: 'HomePage',
	components: {
		
		VideoBackground,
		NavMenu,
		Text,
	},

};
</script>

<style>

</style>
