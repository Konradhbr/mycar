<template>
  <div>
      <NavMenu />
	  <VideoBackground />
	  <Text />
	  <News />
	  <!-- <ModalDepositSuccess /> -->
	  <!-- <ModalLogin /> -->
	  <!-- <ModalRecoverPassword />
	  	  <ModalRecoverPassword /> -->
	  <!-- <ModalRegister /> -->

  </div>
</template>

<script>
// import ModalDepositSuccess from '@/components/Modals/ModalDepositSuccess.vue';
// import ModalLogin from '@/components/Modals/ModalLogin.vue';
// import ModalRecoverPassword from '@/components/Modals/ModalRecoverPassword.vue';
// import ModalRegister from '@/components/Modals/ModalRegister.vue';
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
		// ModalDepositSuccess,
		// ModalLogin,
		// ModalRecoverPassword,
		// ModalRegister,
	},

};
</script>

<style>

</style>
