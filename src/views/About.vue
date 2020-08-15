<template>
  <div class="about">
    <h1>timeNow: {{ timeNow }}</h1>
    <Button @hook:updated="buttonCompUpdate" />
    <hr />
    <h1 :style="{ color: userinfo.color }">{{ userinfo.name }}</h1>
  </div>
</template>

<script>
import Button from '../components/Button';
import formatDate from '../mixins/formatDate'; //mixins混入
import { store, mutations } from '../ministore'; //手写mini版本vuex

export default {
  name: 'About',
  mixins: [formatDate], //mixins混入
  data() {
    return {
      timeNow: this.formatDate(new Date())
    };
  },
  computed: {
    userinfo() {
      return store.userinfo;
    }
  },
  components: {
    Button
  },
  methods: {
    buttonCompUpdate() {
      console.log('003 About methods buttonCompUpdate', ' || ', 'Button组件的updated钩子函数被触发');
    }
  },
  created() {
    const loadingInstance = this.$loading({ text: '正在加载...' });
    // 三秒钟后关闭
    setTimeout(() => {
      loadingInstance.close();
    }, 1000);

    //mini版本vuex
    mutations.setUserinfo({ name: '张三', color: 'blue' });
    // 三秒钟后重新赋值
    setTimeout(() => {
      mutations.setUserinfo({ name: '李四', color: 'red' });
    }, 3000);
  },
  mounted() {
    console.log('About this :>> ', this);
  }
};
</script>

<style lang="less" scoped></style>
