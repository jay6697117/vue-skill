<template>
  <div>
    <button ref="btnDom">点击</button>
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increase() {
      console.log('001 Button methods increase');
      this.counter += 1;
    }
  },
  mounted() {
    this.$refs.btnDom.addEventListener('click', this.increase);

    // $on, $once 内部监听生命周期函数
    this.$once('hook:updated', () => {
      console.log('Button mounted this 1:>> ', this);
      console.log('004 Button mounted $once removeEventListener');
      this.$refs.btnDom.removeEventListener('click', this.increase);
    });

    this.$on('hook:updated', function() {
      console.log('Button mounted this 2:>> ', this);
      console.log('005 Button mounted $on removeEventListener');
      this.$refs.btnDom.removeEventListener('click', this.increase);
    });
  },
  updated() {
    console.log('002 Button updated');
  }
};
</script>

<style lang="less" scoped></style>
