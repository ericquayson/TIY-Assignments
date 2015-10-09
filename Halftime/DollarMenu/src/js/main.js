/* tracer bullet */

$('.tab').on('click', function () {
  console.log('i work!');
});

$('nav .tab-prod').on('click', function () {
  $('#panel-prod').toggle();
});

$('nav .tab-down').on('click', function () {
  $('#panel-down').toggle();
});

$('nav .tab-app').on('click', function () {
  $('#panel-app').toggle();
});

$('nav .tab-proj').on('click', function () {
  $('#panel-proj').toggle();
});

$('nav .tab-free').on('click', function () {
  $('#panel-free').toggle();
});
