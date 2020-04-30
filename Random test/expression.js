var vr=new Vue({
  el:'.expression',
  data:{
    title:'Expressions',
    product:'laptop',
    stock:true
  },
  methods:{
    getSelPrice(){
      if(this.product=='laptop'){
        return '499$'
      } else {
        return '299$'
      }
    }
  }
})
