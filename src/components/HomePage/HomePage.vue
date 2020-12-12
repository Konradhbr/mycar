<template>
  <div>
    <NavMenu />
    <VideoBackground />
    <Text />
    <News />
  </div>
</template>

<script>
import VideoBackground from './VideoBackground.vue';
import NavMenu from '../Header/NavMenu.vue';
import Text from './Text.vue';
import News from './News.vue';

export default {
	name: 'HomePage',
	components: {
		VideoBackground,
		NavMenu,
		Text,
		News,
	},
};
</script>

<style></style>
