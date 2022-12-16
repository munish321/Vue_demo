<template>
  <div class="wrapper">
    <div class="wrapper-card">
      <img class="logo" src="../assets/logo1.png" alt="logo" />
      <h1
        class="text-center mt-6 text-5xl font-medium laeding-tight text-gray-800 mx-auto"
      >
        {{ toggle ? "SIGN UP" : "LOGIN" }}
      </h1>
      <form class="wrapper-form">
        <BaseInput
          :label="'Name'"
          v-model="name"
          v-if="toggle"
          type="text"
          placeholder="Name"
        />
        <BaseInput
          :label="'Email'"
          v-model="email"
          type="email"
          placeholder="Email"
        />
        <BaseInput
          :label="'Password'"
          v-model="password"
          type="password"
          placeholder="Password"
        />
        <p>{{error}}</p>
        <BaseInput
          :label="'Confirm Password'"
          v-model="confirmPassword"
          v-if="toggle"
          type="text"
          placeholder="Confirm Password"
        />
        <p>{{ error }}</p>
        
        <MyButton
          @click.prevent="Submit"
          shadow
          rounded
          :leftIcon="leftIcon"
          :rightIcon="rightIcon"
          :isLoading="loading"
          class=""
          :toggle="toggle"
        />
        <p>
          Already have an account:
          <span @click="handle">{{ toggle ? "Login" : "Sign Up" }}</span>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BaseInput from "./Input.vue";
import MyButton from "./MyButton.vue";
export default {
  name: "SignUp",
  data() {
    return {
      toggle: true,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      loading: false,
      leftIcon: true,
      rightIcon: true,
    };
  },
  components: {
    BaseInput,
    MyButton,
  },
  methods: {
    handle() {
      this.toggle = !this.toggle;
    },
    Submit() {

    
      this.isVisible = !this.isVisible;
      if(this.password=='' && this.confirmPassword==''){
         this.error='Field is required'
    }else if (this.password == this.confirmPassword) {
        alert("Please Login");
        this.error = "";
        this.loading = true;
        this.rightIcon=false;
        this.leftIcon=false;
      } else if (this.password !== this.confirmPassword) {
        this.error = "Password Do Not Match";
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87%;
  height: 100vh;
  background-color: #fff;
  margin: 10px auto;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 2px 1px 10px grey;
}
.wrapper-card {
  width: 500px;
  display: inline-block;
  height: 600px;
  border-radius: 10px;
  box-sizing: border-box;
}

.title {
  text-align: center;
  margin: 30px;
  font-size: 2rem;
  font-weight: 700;
  color: #439a97;
}

p {
  text-align: center;
}
span {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
.logo {
  width: 150px;
  margin: -30px auto;
}
</style>
