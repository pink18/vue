<template>
  <div>
    <button @click="getData">点击获取data</button>
    <button @click="getUser">点击获取user</button>
  </div>
</template>

<script>
import { getData } from "@/api/data";
import { getUser } from "@/api/user";

export default {
  methods: {
    getData() {
      getData()
        .then((res) => {
          console.log("获取成功", res);
        })
        .catch((err) => {});
    },
    getUser() {
      getUser()
        .then((res) => {
          console.log("获取成功", res);
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped >
</style>
