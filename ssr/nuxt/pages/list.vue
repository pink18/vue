<template>
  <div class="ShopList">
    <ul class="item">
      <li v-for="(item, index) in commodity" :key="index">
        <img :src="item.img_list_url" alt />
        <h3 class="name">{{item.title}}</h3>
        <p class="introduce">
          <span class="price">￥{{item.price}}</span>
          <span class="recommend">
            <span class="together" v-html="item.mack"></span>
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  asyncData({ app, params }) {
    return app.$axios
      .get("/goodList", {
        params: {
          page: 1,
        },
      })
      .then(({ data }) => {
        return { commodity: data.data };
      })
      .catch((err) => {
        console.log(err);
      });
  },
  head() {
    return {
      title: "商品列表",
    };
  }
};
</script>

<style scoped>
.item {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.item > li {
  margin-left: 15px;
}
.name {
  font-size: 16px;
  color: #424242;
}
.item img {
  width: 220px;
  height: 220px;
}
.item a {
  display: block;
}
.introduce {
  width: 220px;
  height: 30px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
}
.price {
  color: #ff4500;
}
.together {
  width: 44px;
  height: 25px;
  padding: 2px 6px;
  color: #fff;
}
.sales {
  color: #fa4c81;
}
footer {
  width: 1200px;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>