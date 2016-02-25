'use strict';

var geek = {};

geek.apiURL = 'http://api.indeed.com/ads/apisearch?publisher=6808461958676807&v=2';

geek.getInput = function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    geek.userCity = $('input[name="userCity"]').val();
    console.log(geek.userCity);
    geek.makeCall(geek.userCity);
  });
};

geek.makeCall = function (cityName) {
  $.ajax({
    url: 'http://api.indeed.com/ads/apisearch?publisher=6808461958676807&v=2',
    method: 'GET',
    dataType: 'jsonp',
    data: {
      format: 'json',
      l: cityName,
      q: 'junior front-end developer',
      co: 'CA',
      psf: 'advsrch',
      as_phr: '',
      fromage: '15',
      limit: '50',
      salary: '',
      as_not: '',
      as_ttl: '',
      as_cmp: '',
      jt: 'all',
      st: '',
      radius: '50',
      sr: 'directhire',
      expired: 'false',
      as_and: 'telecommute',
      as_any: 'HTML+CSS+JavaScript'
    }
  }).then(function (data) {
    console.log(data);
  });
};

var gps = navigator.geolocation.getCurrentPosition(function (position) {
  geek.city = position.coords.latitude;
  console.log(geek.city);
});

$(document).ready(function () {
  geek.getInput();
  console.log(gps);
});