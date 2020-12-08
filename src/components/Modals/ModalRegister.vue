<template>
  <modal @close="close">
    <div v-if="error" class="error">{{ error.message }}</div>
    <div class="modal__info">
      <span class="decor">lorem</span>

      <div class="modal__text">
        <h2>register</h2>

        <form @submit.prevent="pressed">
          <label for="email">Email</label><br />
          <input
            type="email"
            v-model="email"
            placeholder="email"
          />
          <br />
          <label for="name">password</label><br />
          <input
            type="password"
            v-model="password"
            placeholder="password"
          />
          <br />
          <!-- <label for="name">Repeat password</label><br />
          <input
            name="password"
            type="text"
            v-model="repeatPassword"
            placeholder="Repeat password"
          /> -->
          <br />
          <div class="modal__checkbox">
          <Checkbox />
          <span class="req">*</span>
          <p>I have read and accept the terms of the agreement</p>
        </div>
        <button
          type="submit"
          class="button button--full"
          @click="$emit('opensuccess')"
        >
          <span>register</span>
        </button>
        </form>
        
        <p><span>*</span> - lorem</p>
      </div>
    </div>
  </modal>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Modal from '@/components/Modals/Modal.vue';
import Checkbox from '@/components/Buttons/Checkbox.vue';

export default {
	name: 'ModalRegister',
	components: { Modal, Checkbox },
	data() {
		return {
			email: '',
			password: '',
			// repeatPassword: '',
			error: '',
		};
	},

	methods: {
		close() {
			this.$emit('close', true);
		},
		async pressed() {
			try {
				const user = firebase
					.auth()
					.createUserWithEmailAndPassword(
						this.email,
						this.password,
						// this.repeatPassword,
					);
				console.log(user);
			} catch (err) {
				console.log(this.error);
			}
		},
		// pressed() {
		// 	alert('submited')
		// }
	 },
};
</script>

<style lang="scss" scoped>
@import '@/assets/Scss/Components/_decor.scss';
.modal__label {
  display: flex;
  padding: 60px 40px;
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
    color: black;
  }
}

.modal__info {
  display: flex;
  flex-direction: column;
  padding: 50px;

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
