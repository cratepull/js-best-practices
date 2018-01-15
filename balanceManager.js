
var balance = 0;

module.exports = {

	canAfford: function(amount){
		if(!this.isValidAmount(amount)){
			errorMessage = 'Invalid Input';
		}

		if(errorMessage){
			throw new Error(errorMessage);
		}

		return amount <= balance;
	},

	decreaseBalance: function(amount){
	    if(!this.canAfford(amount)){
	    	errorMessage = 'Insufficient balance';
	    }

	    if(errorMessage){
	        throw new Error(errorMessage);
	    }

	    balance -= amount;
  	},


	getBalance: function(){ 
    	return balance;
  	},

	increaseBalance: function(amount){
    	balance += amount;
  	},
};