module.exports = {
	
	init: function() {
		// TODO:: Persist data in file or DB
		// TODO:: Read at this stage..
	},
	append: function() {
		// TODO:: Add record to file or DB
	},
	data: [],
	// Add a debt
	add: function(from, to, amount) {
		
		// TODO:: Search and aggregate debts..
		if(!from || !to || !parseFloat(amount)) {
			return false;
		}
		
		this.data.push([ from , to , amount, new Date().getTime() ]);
		
		// TODO:: More readable format perhaps?
		// Debt model should be an object with easier lookup?
		/*
		this.data.push({
			from: from,
			to: to,
			amount: amount,
			time: new Date().getTime()
		});
		*/
		
		return true;
		
	},
	
	// Read single
	read: function(name) {
		
		
		if(!name) {
			// No person specified
			return false;
		}
		
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
		
		if(!res_in.length && !res_out.length) {
			// Specified person not found
			return false;
		}
		
		return [ res_in, res_out ];
		
	},
	// Get settle solution between all people
	settle: function() {
		
		// TODO::
		// Iterate the data to merge debts..
		// Recurcively?
		// First sort?
		
	}
	
}