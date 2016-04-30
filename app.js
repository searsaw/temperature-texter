(function(document, $) {
  'use strict';

  var temperatureEle = document.querySelector('#temperature');

  var getNewTemperature = function() {
    var temperature = Math.floor(Math.random() * 100);
    var newInterval = Math.floor(Math.random() * 10 + 1);

    temperatureEle.innerText = temperature;

    if (temperature < 32) {
      $.get(process.env.WEBTASK_URL + '&temperature=' + temperature);
    }

    setTimeout(getNewTemperature, newInterval * 1000);
  };

  getNewTemperature();
})(document, jQuery);
