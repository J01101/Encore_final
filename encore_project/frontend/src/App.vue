<template>
  <div>
    <Sidebar />
    
    <Content />

    <Footer />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './views/layout/Sidebar.vue'
import Content from './views/layout/Content.vue'
import Footer from './views/layout/Footer.vue'

export default {
  //name: 'App',
  components: {
    Sidebar,
    Content,  
    Footer         //풋터 컴포넌트 추가
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
