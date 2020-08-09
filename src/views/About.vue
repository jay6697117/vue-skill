<template>
  <div class="about">
    <h1>timeNow: {{ timeNow }}</h1>
    <Button @hook:updated="buttonClick" />
    <div>
      <label class="typo__label">Select with search</label>
      <multiselect
        v-model="multiselectValue"
        :options="multiselectOptions"
        :custom-label="selectedName"
        placeholder="Please select one"
        label="name"
        track-by="name"
      ></multiselect>
      <pre class="language-json"><code>{{ multiselectValue  }}</code></pre>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import Multiselect from '../components/Multiselect/Multiselect.vue';
import formatDateLocal from '../mixins/formatDate';

export default {
  name: 'About',
  mixins: [formatDateLocal],
  data() {
    return {
      timeNow: this.formatDate(new Date()),
      multiselectValue: { name: '' },
      multiselectOptions: [
        { name: 'Vue.js' },
        { name: 'Rails' },
        { name: 'Sinatra' },
        { name: 'Laravel' },
        { name: 'Phoenix' }
      ]
    };
  },
  components: {
    Button,
    Multiselect
  },
  methods: {
    selectedName({ name }) {
      return `${name}`;
    },
    buttonClick() {
      console.log('buttonClick...');
    }
  },
  created() {
    this.$set(this.multiselectValue, 'name', this.multiselectOptions[0].name);

    const loadingInstance = this.$loading({ text: '正在加载...' });
    // 三秒钟后关闭
    setTimeout(() => {
      loadingInstance.close();
    }, 1500);
  },
  mounted() {
    console.log('this :>> ', this);
  }
};
</script>

<style lang="less" scoped>
/deep/ .multiselect__tags {
  border: 1px solid red;
}
</style>
