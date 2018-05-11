<template>
  <div id="app">
    <ul class="collection">
      <li class="collection-item avatar">
        <img src="/static/img/icons/book-icon.png" class="circle">
        <b class="title">Title</b>
        <p>Author</p>
        <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">add</i>
      </a>
      <ul>
        <li><router-link to="/new_camera" class="btn-floating"><i class="material-icons">camera_alt</i></router-link></li>
        <li><a class="btn-floating"><i class="material-icons">edit</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    const instances = M.FloatingActionButton.init(elems, { // eslint-disable-line
      direction: 'top',
      hoverEnabled: false,
    });
  },
};
</script>

<style scoped>

ul {
  margin-top: 0;
  padding-top: 55px;
}
@media (min-width: 1200px) {
  ul {
    width: 70%;
    margin-left: 15%;
    margin-top: 10px;
  }
}

.collection-item {
  padding-top: 20px;
}

.secondary-content {
  margin-top: 15px;
}

.btn-floating {
  background-color: #00BCD4;
}
</style>