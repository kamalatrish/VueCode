<template>
  <div class="hello">
    <h2>{{introTextLogin}}</h2>
    <label for="fname">User Email</label>
    <br>
    <input type="text" v-model = "userEmail"><br>
    <label>Password</label><br>
    <input type="password" v-model = "userPass"><br><br>
    <div class="colorGreen">{{warmingMsgSuccess}}</div>
    <div class="colorRed">{{warmingMsgError}}</div>
    <button type="button" v-on:click = "submitLoginDate">Submit</button>
    <button type="button" v-on:click = "resetLoginDate">Reset</button>
  </div>
</template>

<script>
export default {
  name: 'mobHome',
  data () {
    return {
      introTextLogin: 'Login here to Continue',
      userEmail: '',
      userPass: '',
      staticUserData: {
        email: 'admin',
        pass: 'pass@1'
      },
      warmingMsgSuccess: '',
      warmingMsgError: ''
    }
  },
  created () {
    console.log(this.introTextLogin)
  },
  methods: {
    submitLoginDate: function () {
      if (this.userEmail === this.staticUserData.email && this.userPass === this.staticUserData.pass) {
        location.href = '/#/mobilehome'
      } else {
        this.warmingMsgError = 'Invalid or Empty Credentials.'
        this.warmingMsgSuccess = ''
      }
    },
    resetLoginDate: function () {
      this.warmingMsgSuccess = ''
      this.warmingMsgError = ''
      this.userEmail = ''
      this.userPass = ''
    }
  },
  components: {
    testcomponent: {
      template:
        '<div><h1>coming from template component</h1></div>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.colorGreen {
  color:#42b983
}
.colorRed {
  color:#FF0000
}
</style>
