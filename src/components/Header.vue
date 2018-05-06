<template>
  <div id="app">
    <header>
      <img src="/static/img/icons/book-icon.png" class="icon-header">
      <span>Book Store</span>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
};
</script>

<style>
.icon-header {
  width: 40px;
  height: 40px;
}

header {
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #00BCD4;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  margin-left: 10px;
}
</style>
