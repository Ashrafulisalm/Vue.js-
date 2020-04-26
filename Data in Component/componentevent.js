Vue.component('product',{
  props:{
      premium:{
        type:Boolean,
        required:true
      }
  },

  data() {
   return {
     brand:'Apple',
     product: 'iPhone 11',
     selectedVarient:0,
     detail:["5.7\" Display","3GB Ram","Quad-core Processor" ],
     varients:[
       {color_id:10, color:'red', color_img:'red.png', qty:5},
       {color_id:11,color:'green',color_img:'green.png',qty:0},
       {color_id:12,color:'black',color_img:'black.png',qty:10}
     ]

   }
 } ,

template:'<div><div class="col" ><img :src="images" alt=""></div><div class="col" ><h1>{{ title }}</h1><p v-if="stock > 3">In Stock</p><p v-else>Out of Stock</p><p>User is premium: {{premium}} </p><p>Shipping: {{shipping}} </p><ul><li v-for="details in detail">{{details}}</li></ul><div>Color:</div><div v-for="(varient,index) in varients" :key="varient.color_id" class="color-box " :style="{backgroundColor:varient.color}" @mouseover="colorVarient(index)"></div><br><button type="button" name="button" v-on:click="addtoCart" :disabled="stock<4">Add to Cart</button></div></div>',



methods:{
  addtoCart:function(){
    this.$emit('add-to-cart', this.varients[this.selectedVarient].color_id)
  },
  colorVarient:function(index){
    this.selectedVarient=index
  }
},

computed: {
  title(){
    return this.brand +" "+this.product
  },
  images(){
    return this.varients[this.selectedVarient].color_img
  },
  stock(){
    return this.varients[this.selectedVarient].qty
  },
  shipping(){
    if(this.premium){
      return 'Free'
    } else {
      return '3.99$'
    }
  }
}


})


var app = new Vue({
  el: '#container',
  data:{
    premium:true,
    cart:[]
  },
  methods:{
    updateCart(id){
      this.cart.push(id)
    }
  }


})
