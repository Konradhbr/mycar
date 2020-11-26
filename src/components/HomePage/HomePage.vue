<template>
  <div>
      <Header />
	  <VideoBackground />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import VideoBackground from './VideoBackground.vue';

export default {
	name: 'HomePage',
	components: {
		Header,
		VideoBackground,
	},

};
</script>

<style>

</style>
