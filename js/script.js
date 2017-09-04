function Button(text) {
	this.text = text;
}


Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert("Został wciśnięty guzik z napisem " + self.text);
			new Button('kk');
			var btn1 = new Button(prompt('Jak nazwiesz swój kolejny super guzik?', 'Mój nowy guzik'));
			btn1.create();
		});
		this.$element.appendTo($('body'));
	}
}

var btn = new Button(prompt('Jak nazwiesz super guzik?', 'Nowy guzik'));
btn.create();