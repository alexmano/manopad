class App {  
  static init() {
	App.initBackground();
  };

  static initBackground() {
	var photos = new Array();	
	photos[0] = "http://orig00.deviantart.net/acb6/f/2013/303/7/6/gif___running_through_the_rain_by_turst67-d6scius.gif";
	photos[1] = "http://bestanimations.com/Nature/snow-animated-gif.gif";
	photos[2] = "http://bestanimations.com/Nature/clouds-floating-over-himalaya-mountains-animated-gif.gif";
	photos[3] = "http://bestanimations.com/Nature/clouds-flowing-over-lake-mountains-nature-animated-gif.gif";
	photos[4] = "http://bestanimations.com/Nature/winter/winter-snow-nature-animated-gif-31.gif";
	photos[5] = "https://farm9.staticflickr.com/8760/17195790401_ceeeafcddb_o.jpg";

	document.querySelector('#changeBg').onclick = function() {
		let newImage = photos[App.getRndInteger(0, photos.length-1)];
		document.body.style.backgroundImage = "url('"+ newImage +"')";
	};  
  };
  static getRndInteger(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) ) + min;
  };
};
document.addEventListener("DOMContentLoaded", App.init)
