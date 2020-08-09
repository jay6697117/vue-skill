import moment from 'moment';

export default {
  data() {
    return {
      mixinTitle: "混入mixin"
    };
  },
  created() {
    console.log("created: ", this.mixinTitle);
  },
  mounted() {},
  methods: {
    //日期转换
    formatDate(dateTime, fmt = "YYYY年MM月DD日") {
      if (!dateTime) {
        return "";
      }
      moment.locale("zh-CN");
      dateTime = moment(dateTime).format(fmt);
      return dateTime;
    }
  }
};
