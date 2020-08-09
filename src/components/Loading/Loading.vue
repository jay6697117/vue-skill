<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <!--loading上面显示的文字-->
        <div class="custom-loading-text">
          <img src="../../assets/loading.gif" alt="loading" />
          <span>{{ text }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Loading",
  data() {
    return {
      visible: false,
      text: ""
    };
  }
};
</script>
<style lang="less" scoped>
.custom-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(200, 200, 200, 0.3);
}
.custom-loading-text {
  font-size: 32px;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
