<template>
  <div>
    <button ref="btn">点击</button>
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increase() {
      console.log("increase...");
      this.counter += 1;
    }
  },
  mounted() {
    this.$refs.btn.addEventListener("click", this.increase);
    this.$once("hook:updated", () => {
      this.$refs.btn.removeEventListener("click", this.increase);
    });
  }
};
</script>

<style lang="less" scoped></style>
