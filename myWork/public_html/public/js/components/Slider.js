function Slider(el) {
	'use strict';
	if (!el) return;
	this.sliderEl = el;
	this.slider = el.querySelector('.val-list-slider');
	this.sliderItems = el.querySelectorAll('.val-list-slider-item');
	this.sliderControl = el.querySelector('.val-display-controls');
	this.sliderCreateSpansAndAddDataAtribute();
	this.sliderAddEL();
	this.sliderAutoPlay();
	this.sliderStartAutoPlay;
}

Slider.prototype.sliderCreateSpansAndAddDataAtribute = function() {
	'use strict';
	var spans = '';
	for (var i = 0; i < this.sliderItems.length; i++) {
		// this.sliderItems[i].setAttribute('data-slide', i);
		if (i === 0) {
			spans += '<span data-controls="' + i + '" class="-active-slide"></span>';
			continue;
		}
		spans += '<span data-controls="' + i + '"></span>';
	}
	this.sliderControl.insertAdjacentHTML('beforeend', spans);
	this.slider.style.cssText += 'transition: all ease-in-out 800ms;';
	this.sliderSpansControl = this.sliderControl.querySelectorAll('span');
};
Slider.prototype.sliderAddEL = function() {
	'use strict';
	this.sliderControl.addEventListener('click', this.sliderActiveSpan.bind(this));
	this.sliderEl.addEventListener('mouseover', this.sliderAutoStop.bind(this));
	this.sliderEl.addEventListener('mouseout', this.sliderAutoPlay.bind(this));
};
Slider.prototype.sliderActiveSpan = function(event) {
	'use strict';
	var target = event && event.target || window.event.srcElement;
	if (target.tagName == 'SPAN' && !target.classList.contains('-active-slide')) {
		for (var i = 0; i < this.sliderSpansControl.length; i++) {
			this.sliderSpansControl[i].classList.remove('-active-slide');
		}
		target.classList.add('-active-slide');
		this.slider.style.cssText += 'transform: translateX(' + (-this.sliderItems[0].offsetWidth * parseFloat(target.getAttribute('data-controls'))) + 'px);';
	}
};
Slider.prototype.sliderAutoPlay = function() {
	'use strict';
	var self = this;
	this.sliderStartAutoPlay = setTimeout(function(){
		for (var i = 0; i < self.sliderSpansControl.length; i++) {
			if (self.sliderSpansControl[i].classList.contains('-active-slide')) {
				self.sliderSpansControl[i].classList.remove('-active-slide');
				if (self.sliderSpansControl[i + 1] === undefined) i = -1;
				self.sliderSpansControl[i + 1].classList.add('-active-slide');
				self.slider.style.cssText += 'transform: translateX(' + (-self.sliderItems[0].offsetWidth * (i + 1)) + 'px);';
			break;
			}
		}
		self.sliderAutoPlay();
	}, 3000);
};
Slider.prototype.sliderAutoStop = function() {
	'use strict';
	clearTimeout(this.sliderStartAutoPlay);
};