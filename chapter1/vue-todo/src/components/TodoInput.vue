<template>
  <div class='inputBox shadow'>
    <input type="text" v-model='newTodoItem' v-on:keyup.enter='addTodo()'>
    <!-- <button v-on:click='addTodo'>add</button> -->
    <span class='addContainer' v-on:click='addTodo()'>
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">
        경고!
        <i class="closeModeaBtn fas fa-times" @click='showModal=false'></i>
      </h3>

      <h3 slot="body">
        입력하세요.
      </h3>

      <h3 slot="footer">
        copy right
        <button class="modal-default-button" @click="showModal=false">
          OK
        </button>
      </h3>

    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
        newTodoItem: '',
        showModal: false
    }
  },
  methods: {
    //버튼이 눌리면 $emit을 통해 App의 v-on으로 전달(this.newTodoItem)
    addTodo() {
      if(this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem='';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModeaBtn {
  color: #42b983;
}
</style>