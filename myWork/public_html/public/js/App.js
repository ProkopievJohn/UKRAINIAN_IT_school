function App() {
	this.init();
}
App.prototype = Object.create(Helper.prototype);
App.prototype.init = function(){
	new Iframe(document.querySelector('.val-iframe-streams'));
	new Slider(document.querySelector('.val-slider-general-news'));
};
window.addEventListener('DOMContentLoaded', function(){
	new App();
})