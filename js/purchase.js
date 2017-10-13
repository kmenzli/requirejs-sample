define (["credits","products"], function (credits,products) {
  return {
    purchaseProduct : function () {
      console.log("Function : purchaseProduct");
    
      var c = credits.getCredits();
      if(c > 0){
        products.reserveProduct();
        return true;
      }
      return false;
    }
  }
});