<template>
  <div id="app">
    <div class="scanner-container" ref="scanner"></div>
    <b>ISBN: {{ isbn }}</b>
  </div>
</template>

<script>
import Quagga from 'quagga';

export default {
  name: 'app',
  data() {
    return {
      isbn: '',
    };
  },
  mounted() {
    /*eslint-disable*/
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: this.$refs.scanner,
        constraints: {
          width: width
        },
      },
      decoder : {
        readers : ['ean_reader','code_39_reader','code_128_reader']
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });
    let vm = this;
    Quagga.onDetected(function (data) {
      console.log('peguei!')
      console.log(data.codeResult.code)
      vm.isbn = data.codeResult.code
      //Quagga.stop();
    });
  },
  methods: {

  },
  destroyed() {
    Quagga.stop();
  },
};
</script>

<style scoped>
.scanner-container {
  max-height: 480px
}
</style>
