var vm=new Vue({
  el:'.computed',
  data:{
    firstname:"Ashraful",
    lastname:'Islam',
    age:10
  },
  computed:{
    fullname(){
      return this.firstname+' '+this.lastname
    },
    ageAfter5(){
      return this.age+5
    },
    reversename(){
      return this.fullname.split('').reverse().join('')
    }
  }

})
