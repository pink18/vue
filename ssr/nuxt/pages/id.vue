<template>
  <div>
      <h1>{{commodity}}</h1>
  </div>
</template>

<script>
export default {
    asyncData({ app, params }) {
    return app.$axios
      .get("/id", {
        params: {
          age: params.id
        },
      })
      .then(({ data }) => {
        return { commodity: data.id };
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>

<style>

</style>