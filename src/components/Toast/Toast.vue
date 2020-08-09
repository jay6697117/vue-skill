<template>
  <div>
    <transition name="fade">
      <div class="little-tip" v-show="showTip">
        <img src="../../assets/success.png" alt="" width="36" v-if="type == 'success'" />
        <img src="../../assets/fail.png" alt="" width="36" v-if="type == 'fail'" />
        <img src="../../assets/warning.png" alt="" width="36" v-if="type == 'warning'" />
        <img src="../../assets/loading.gif" alt="" width="36" v-if="type == 'loading'" class="loading" />
        <span>{{ msg }}</span>
        <button class="close-tip" @click="closeTip">关 闭</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTip: true,
      msg: '',
      type: ''
    };
  },
  methods: {
    closeTip() {
      this.showTip = false;
    }
  }
};
</script>
<style lang="less" scoped>
.little-tip {
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  width: 96vw;
  height: 40vh;
  position: fixed;
  top: 50%;
  left: 50%;
    transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .close-tip {
    padding: 3px 40px;
    border-radius: 5px;
    font-size: 18px;
    color: #eeeeee;
    background-color: green;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loading {
  background-color: #cccccc;
}
}


</style>
