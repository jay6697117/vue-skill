<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" height="100" />
    <hr />
    <button @click="toastHandle">提示</button>
    <br /><br />
    <button @click="toastSuccessHandle">成功提示</button>
    <br /><br />
    <button @click="toastFailHandle">失败提示</button>
    <br /><br />
    <button @click="toastWarningHandle">警告提示</button>
    <br /><br />
    <button @click="toastLoadingHandle">加载提示</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    toastHandle() {
      this.$toast({ msg: "手机号码不能为空" });
    },
    toastSuccessHandle() {
      this.$toast({
        msg: "成功提示",
        type: "success"
      });
    },
    toastFailHandle() {
      this.$toast({
        msg: "失败提示",
        type: "fail"
      });
    },
    toastWarningHandle() {
      this.$toast({
        msg: "警告提示",
        type: "warning"
      });
    },
    toastLoadingHandle() {
      this.$toast({
        msg: "加载提示",
        type: "loading"
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
