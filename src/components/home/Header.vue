<template>
<div class="header">
  <a href="/" class="logo">HOME ICON</a>
  <div class="header-right">
      {{introTextHeader}}
    <!-- <a class="active" href="#home">Home</a> -->
    <!-- <a href="#contact">Contact</a> -->
    <!-- <a href="/">Logout</a> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      introTextHeader: 'Mobile Application Kart : Sample Vue JS Application'
    }
  },
  created () {
    console.log(this.introTextLogin)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerClass {
  background-color: #42b983;
}
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}
.header a:hover {
  background-color: #ddd;
  color: black;
}
.header a.active {
  background-color: dodgerblue;
  color: white;
}
.header-right {
  float: right;
}
</style>
