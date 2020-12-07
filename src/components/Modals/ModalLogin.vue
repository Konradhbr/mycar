<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">lorem</span>

      <div class="modal__text">
        <h2>login</h2>
        
<form>
	<label for="name">Name</label><br /> 
	<input name="name" type="text" value="" /> <br /> 
</form>

<form>
	<label for="name">Name</label><br /> 
	<input name="name" type="text" value="" /> <br /> 
</form>
<span>Forgot password <a href="#" @click="$emit('openrecover')">Recover password</a></span>
        <button type="submit" class="button button--full"><span>login</span></button>
        <p>or</p>
                <button type="submit" class="button button--full" @click="$emit('openregister')"><span>create account</span></button>

      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modals/Modal.vue';

export default {
	name: 'ModalDepositSuccess',
	components: { Modal },
	props: {
		label: {
			type: String,
			required: true,
		},
	},
	methods: {
		close() {
			this.$emit('close', true);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/Scss/Components/_decor.scss';
.modal__label {
  display: flex;
  padding: 60px  40px ;
}

.modal__text {
  input[type='text'] {
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  margin: auto;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;

  p {
    color: black
    ;
  }
}

.modal__info {
  display: flex;
  flex-direction: column;
  padding: 50px ;

  h2 {
    margin: 0 0 20px 0;
  }
}

@media screen and (min-width: 1024px) {
  .modal__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 80px;
  }
}
</style>
