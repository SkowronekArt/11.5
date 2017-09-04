function Button(text) {
	this.text = text;
}


Button.prototype = {
	create: function() {
		var self = this;
		var textAlternative = this.text || "hej";
		this.$element = $('<button>');
		this.$element.text(textAlternative);
		this.$element.click(function() {
			alert("Został wciśnięty guzik z napisem " + textAlternative);
			new Button('kk');
			this.text = prompt('napisz coś')
			var btn1 = new Button(this.text);
			btn1.create();
		});
		this.$element.appendTo($('body'));
	}
}

var btn = new Button(prompt('Jak nazwiesz super guzik?', 'Nowy guzik'));
btn.create();