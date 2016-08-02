function Menu(el) {
	'use strict';
	if (!el) return;
	this.menuEl = el;
	this.menuInit();
}

Menu.prototype = Object.create(App.prototype);

Menu.prototype.menuInit = function () {
	'use strict';
};