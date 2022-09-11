<template>
<form @submit="formSubmit">
<div>
    <label for="name">Name</label>
    <input type="text" id="name" v-model="formValues.name">
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" v-model="formValues.email">
  </div>
  <div>
    <label for="profile">Profile Summary</label>
    <textarea name="profileSummary" id="profile" cols="30" rows="10" v-model="formValues.profileSummary"/>
  </div>
  <div>
    <label for="country">Select Your Country</label>
    <select name="country" id="country" v-model="formValues.country" >
      <option value="">Select country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Singapore">Singapore</option>
    </select>
  </div>

  <div>
    <label for="job-location">Job Location</label>
    <select name="job-location" id="job-location" multiple v-model="formValues.jobLocation" >
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Singapore">Singapore</option>
    </select>
  </div>

  <div>
    <label for="gender">Select your Gender</label>
    <input type="radio" name="gender" id="gender" v-model="formValues.gender">
    <label for="">Male</label>
    <input type="radio" name="gender" id="gender" v-model="formValues.gender">
    <label for="">Female</label>
  </div>

  <div>
    <label>What are your skills?</label>
    <div>
      <input type="checkbox" id="html" v-model="formValues.skills">
      <label for="html">HTML</label>
      <input type="checkbox" id="css" v-model="formValues.skills">
      <label for="css">CSS</label>
      <input type="checkbox" id="javaScript" v-model="formValues.skills">
      <label for="javaScript">javaScript</label>
    </div>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
  
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
     formValues:{
      name:'',
      email:'',
      profileSummary:'',
      country:'',
      jobLocation:[],
      gender:'',
      skills:[]
     }
    };
  },
  methods:{
    formSubmit(event){
      event.preventDefault();
      console.log('formData',this.formValues);
    }
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
  margin-top: 60px;
}
</style>
