var list = document.querySelector('#list'),
		child = list.querySelectorAll('li'),
		length = child.length,

		funObj = {
			changeChildLength: function() {
					child = list.querySelectorAll('li'),
					length = child.length;
				},
			removeAllClassLi: function() {
					for (var i = 0; i < child.length; i++) {
						child[i].classList.remove('green');
					}
				},
			selectFirstChild: function() {
					this.removeAllClassLi();
					child[0].classList.add('green');
				},
			selectLastChild: function() {
					this.removeAllClassLi();
					child[length-1].classList.add('green');
				},
			selectNextNode: function() {
				for (var i = 0; i < length; i++) {
					if (child[i].classList.contains('green')) {
						this.removeAllClassLi();
						i++;
						if (i==length) {i=0};
						child[i].classList.add('green');
					}
				}
			},
			selectPrevNode: function() {
				for (var i = 0; i < length; i++) {
					if (child[i].className == 'green') {
						this.removeAllClassLi();
						i--;
						if (i<0) {i=length-1};
						child[i].classList.add('green');
					}
				}
			},
			createNewChild: function() {
				if (length == 0) {
					var li = document.createElement('li');
					li.innerHTML = 'item 0';
					list.appendChild(li);
					this.changeChildLength();
					child[0].classList.add('green');
				} else {
					for (var i = 0; i < length; i++) {
						if (child[i].className == 'green') {
							var li = "<li>item " + length + "</li>";
							child[i].insertAdjacentHTML("afterEnd", li);
							this.changeChildLength();
							this.removeAllClassLi();
							i++;
							child[i].classList.add('green');
						}
					}
				}
			},
			removeLastChild: function() {
				for (var i = 0; i < length; i++) {
					if (child[i].className == 'green') {
						list.removeChild(child[i]);
						this.changeChildLength();
						this.removeAllClassLi();
						i--;
						child[i].classList.add('green');
					}
				}
			},
			createNewChildAtStart: function() {
				var li = document.createElement('li');
						li.innerHTML = 'item ' + length;
						list.insertBefore(li, child[0]);
						this.changeChildLength();
						this.removeAllClassLi();
						child[0].classList.add('green');
			}
		}