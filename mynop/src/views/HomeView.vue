<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CententArea />
    <FooterView></FooterView>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CententArea from '@/components/CententArea.vue'
import FooterView from '@/components/Footer-View.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CententArea,
    FooterView
  }
}
</script>
