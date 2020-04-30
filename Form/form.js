var app =new Vue({
  el:'.form',
  data:{
    name:null,
    rating:null,
    review:null,
  },
  methods:{
    onSubmit(){
      let productReview = {
        name:this.name,
        rating:this.rating,
        review:this.review
      }
      this.name=null,
      this.rating=null,
      this.review=null
    }

  }
})
