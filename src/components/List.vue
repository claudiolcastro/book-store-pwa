<template>
  <div id="app">
    <ul v-for="book in books" :key="book.isbn" class="collection">
      <li class="collection-item avatar">
        <img src="static/img/icons/book-icon.png" class="circle">
        <b class="title">{{ book.title }}</b>
        <p>{{ book.author }}</p>
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
import data from '../store/data';

export default {
  name: 'app',
  data() {
    return {
      books: data.books,
    };
  },
  mounted() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    const instances = M.FloatingActionButton.init(elems, { // eslint-disable-line
      direction: 'top',
      hoverEnabled: true,
    });
  },
};
</script>

<style scoped>

ul {
  margin: 0;
  border-top: none;
}
@media (min-width: 1200px) {
  ul {
    width: 70%;
    margin-left: 15%;
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