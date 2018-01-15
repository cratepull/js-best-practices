var balanceManager = require('./balanceManager');

module.exports = {

 	getAmount: function(coinType) {

	    /* COINS:

	    - [p]enny
	    - [n]ickel
	    - [d]ime
	    - [q]uarter 

	    */

	    if (coinType == 'p' || coinType == 'n' || coinType == 'd' || coinType == 'q'){
	    	
	    	var coins = {
		    	'p': 1,
		    	'n':5,
		    	'd':10,
		    	'q':25
	    	}

	    	return coins[coinType]
	    }

	    throw new Error('Unrecognized coin ' + coinType)

	}
};