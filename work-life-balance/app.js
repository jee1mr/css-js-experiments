var El = function(id) {
	var self = this;

	this.id = id;
	this.el = document.getElementById(id);

	this.el.addEventListener('change', function() {
		makeAdjustments(self.id);
	});

	this.getState = function() {
		return self.el.checked;
	}

	this.changeState = function(state) {
		self.el.checked = state;
	}
}

var career = new El("career");
var salary = new El("salary");
var balance = new El("balance");

var makeAdjustments = function(changedState) {
	var allStates = [career.getState(), salary.getState(), balance.getState()];
	if (allStates[2] && allStates[0] && allStates[1]) {
		if (changedState == balance.id) {
			salary.changeState(false);
		} else if (changedState == salary.id) {
			career.changeState(false);
		} else {
			balance.changeState(false);
		}

	}
}