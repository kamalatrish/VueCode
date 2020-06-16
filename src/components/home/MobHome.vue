<template>
  <div style="display: flex;">
    <MobileLeftMenu activeMobileHome="active"></MobileLeftMenu>
    <h2>{{introTextLogin}}</h2>
  </div>
</template>

<script>
import MobileLeftMenu from '@/components/home/MobLeftMenu'
export default {
  name: 'MobHome',
  components: {
    MobileLeftMenu: MobileLeftMenu
  },
  data () {
    return {
      introTextLogin: 'Welcome to mobile home component'
    }
  },
  created () {
    console.log(this.introTextLogin)
  },
  methods: {
    resetLoginDate: function () {
      console.log(this.introTextLogin)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vertical-menu {
  width: 220px;
  height: 220px;
  margin-top: 12px;
}
.vertical-menu a {
  background-color: #eee;
  color: black;
  display: block;
  padding: 13px 8px 13px 5px;
  text-align: center;
  text-decoration: none;
}
.vertical-menu a:hover {
  background-color: #ccc;
}
.vertical-menu a.active {
  background-color: #57AFDE;
  color: white;
}
</style>
