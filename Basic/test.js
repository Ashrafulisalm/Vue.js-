var app = new Vue({
  el: '#container',
  data: {
    brand:'Apple',
    product: 'iPhone 11',
    selectedVarient:0,
    cart:0,
    detail:["5.7\" Display","3GB Ram","Quad-core Processor" ],
    varients:[
      {color_id:10,color:'red',color_img:'red.png',qty:5},
      {color_id:11,color:'green',color_img:'green.png',qty:0},
      {color_id:12,color:'black',color_img:'black.png',qty:10}
    ]

  },

  methods:{
    addtoCart:function(){
      this.cart += 1
    },
    colorVarient:function(index){
      this.selectedVarient=index
    }
  },
  computed:{
    title(){
      return this.brand +" "+this.product
    },
    image(){
      return this.varients[this.selectedVarient].color_img
    },
    stock(){
      return this.varients[this.selectedVarient].qty
    }
  }

})
