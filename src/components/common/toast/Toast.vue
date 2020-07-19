<template>
  <transition name="fade">
    <div class="toast" v-show="isShow" ref="toast" >
      <span>{{msg}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        msg: '',
        isShow: false,
      }
    },
    methods: {
      show(msg,delay=1500) {
        return new Promise((resolve, reject) => {
          if (this.isShow) {
            resolve();
          }
          this.msg = msg;
          this.isShow = true;
          setTimeout(() => {
            this.isShow = false;
            resolve(msg);
          }, delay);
        })
      },
    },
  }
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px!important;
  z-index: 999;
  color: #fff;
  white-space: nowrap;
  border-radius: 10px;
  font-size: 14px;
  background-color: rgba(0, 0, 0, .7);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>