function App() {
	this.init();
}
App.prototype = Object.create(Helper.prototype);
App.prototype.init = function(){
	this.getDate('2016-07-16 10:11:12', 'ru');
}

window.addEventListener('DOMContentLoaded', function(){
	new App();
})