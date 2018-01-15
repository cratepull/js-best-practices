
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');


module.exports = {


convertToChange: function(change){

    /* COINS:
        - [p]enny
        - [n]ickel
        - [d]ime
        - [q]uarter
    */

    var options = []
    var totalChange = []


    var coins = {
        'p': 1,
        'n':5,
        'd':10,
        'q':25
    }


     var coinsReversed = {
        1: 'p',
        5: 'n',
        10:'d',
        25:'q'
    }


    while(change > 0){

        for(key in coins){
            if(coins[key] <= change ){
                options.push(coins[key])
                options.sort(function(a, b){return b-a})
            }
        }
        
        var changeRandom = options[0]
        var options = []

        change -=  changeRandom
        
        totalChange.push(coinsReversed[changeRandom])
        totalChange.sort(function(a, b){return b-a})

    }

    return totalChange

  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function(productId){
    var product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
