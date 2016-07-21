function Helper() {
}

// Helper.prototype.getDate = function(date, lang) {
// 	'use strict';
// 	var now = this.getDate_Date(),
// 			news = this.getDate_Date(date);
// 	if (now.datesValue == news.datesValue) {
// 		console.log(now.dates.getHours() + ':' + now.dates.getMinutes());
// 	} else {
// 		console.log(now.dates.getDate() + ' ' + this.getDate_getMouns(news.dates.getMonth(), lang) + ' ' + now.dates.getFullYear());
// 	}
// };
// Helper.prototype.getDate_Date = function(data) {
// 	'use strict';
// 	var dates = data ? new Date(data) : new Date(),
// 			datesValue = (new Date(dates.getFullYear(),dates.getMonth(),dates.getDate())).valueOf();
// 	return {dates: dates,	datesValue: datesValue};
// };
// Helper.prototype.getDate_getMouns = function(news, lang) {
// 	'use strict';
// 	var mounthObject = {
// 		ru: {
// 			1: 'Января',
// 			2: 'Февраля',
// 			3: 'Марта',
// 			4: 'Апреля',
// 			5: 'Мая',
// 			6: 'Июня',
// 			7: 'Июля',
// 			8: 'Августа',
// 			9: 'Сентября',
// 			10: 'Октября',
// 			11: 'Ноября',
// 			12: 'Декабря'
// 		},
// 		uk: {
// 			1: "Січня",
// 			2: "Лютого",
// 			3: "Березня",
// 			4: "Квітня",
// 			5: "Травня",
// 			6: "Червня",
// 			7: "Липня",
// 			8: "Серпня",
// 			9: "Вересня",
// 			10: "Жовтня",
// 			11: "Листопада",
// 			12: "Грудня"
// 		}
// 	};
// 	return mounthObject[lang][news];
// };
// Helper.prototype.XMLReq = function(mesod, url) {
// 	'use strict';
// 	var xml = new XMLHttpRequest();
// 	xml.addEventListener('readystatechange', function(){
// 		if (xml.readyState === xml.DONE) {
// 			if (xml.status === 200 && xml.statusText === 'OK') {
// 				return xml.responseText;
// 			}
// 		}
// 	});
// 	xml.open(mesod, url, true);
// 	xml.send();
// };