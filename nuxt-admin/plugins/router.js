export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    // console.log(to, from);
    next();
  });
};
