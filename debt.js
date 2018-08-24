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
		
		var total = 0;
		var count = 0;
		
		for(x in this.data) {
			
			// Check existing to this name
			if(this.data[x][0] == from && this.data[x][1] == to) {
				total += this.data[x][2];
				count++;
			}
			
			// Check existing from this name
			if(this.data[x][1] == from && this.data[x][0] == to) {
				total -= this.data[x][2];
				count++;
			}
			
		}
		
		this.data.push([ from , to , parseFloat(amount), new Date().getTime() ]);
		
		total += parseFloat(amount);
		count++;
		
		// Check if all settled between 2 users
		if(total == 0) {
			
			// TODO::
			// Clear existing records?
			// Keep for reference?
			
		}
		
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
		// console.log(this.data);
		// Return total money owed between 2 users
		return total;
		
	},
	
	// Read single
	read: function(name) {
		
		
		if(!name) {
			// No person specified
			return false;
		}
		
		var res_owe  = {};
		var res_owed = {};
		
		for(x in this.data) {
			
			if(this.data[x][0] == name) {
				
				// This person owes somebody, aggregate..
				if(res_owed[this.data[x][0]]) {
					res_owed[this.data[x][0]] += this.data[x][2];
				} else {
					res_owed[this.data[x][0]] = this.data[x][2];
				}
				
			} else if(this.data[x][1] == name) {
				
				if(res_owe[this.data[x][1]]) {
					res_owe[this.data[x][1]] += this.data[x][2];
				} else {
					res_owe[this.data[x][1]] = this.data[x][2];
				}
				// Somebody owes this person
				
			} else {
				// Between other people
			}				
			
		}
		
		// if(!res_owe.length && !res_owed.length) {
		// Specified person not found
		//	return false;
		// }
		
		return { 
			owe: res_owe,
			owed: res_owed,
		};
		
	},
	// Get settle solution between all people
	settle: function() {
		
		// TODO::
		// Iterate the data to merge debts..
		// Recurcively?
		// First sort?
		
	}
	
}