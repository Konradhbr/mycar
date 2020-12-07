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
<form>
	<label for="name">Name</label><br /> 
	<input name="name" type="text" value="" /> <br /> 
</form>
<div class="modal__checkbox">
        <Checkbox />
        <span class="req">*</span>
        <p>I have read and accept the terms of the agreement</p>
      </div>
        <button type="submit" class="button button--full" @click="$emit('opensuccess')"><span>register</span></button>
                <p><span>*</span> - lorem</p>

      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modals/Modal.vue';
import Checkbox from '@/components/Buttons/Checkbox.vue';


export default {
	name: 'ModalRegister',
	components: { Modal,Checkbox },
	
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
