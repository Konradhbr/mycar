<template>
  <video autoplay muted loop id="Video">
  <source src="src\assets\videos\1.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
</template>

<script>
export default {
	name: 'VideoBackground',

}
</script>
<style lang="scss" scoped>
#Video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}
</style>
