// TODO::
// Debt model should be an object with easier lookup?


module.exports = {
	
	data: [],
	// Add a debt
	add: function(from, to, amount) {
		
		// TODO:: Search and aggregate debts..
		
		this.data.push([ from , to , amount ]);
		return from + ' ' + to + ' ' + amount;
		
	},
	
	// Read single
	read: function(name) {
		
		var res_in  = [];
		var res_out = [];
		
		for(x in this.data) {
			if(this.data[x][0] == name) {
				
				// This person owes somebody
				res_out.push(this.data[x]);
				
			} else if(this.ata[x][1] == name) {
				
				res_in.push(this.data[x]);
				// Somebody owes this person
				
			} else {
				// Between other people
			}				
		}
		
		return [ res_in, res_out ];
		
	},
	
	// Settle between all
	settle: function() {
		
	}
	
}