/* Pseuedo Code for Nested Accordion functionality

  Quick summary: once a user arrives to the website, they should be able to click on the `<h3>` (which up until this point, all of the text is hidden) will show the `p` content. Once the user sees the subaccordion, he or she can click on those `h5` and then will show their content

  Selectors:

  `<h3>`
  `<h5>`
  `<sub-accordion>`

 */

$(function () {

  $('h3').on('click', function (e) {
    $('p').show();
  })

  $('h5').on('click', function (e) {
    $('.sub-accordion').show();
  })

})
