// Write your Pizza Builder JavaScript in this file.
// Iteration 1 - Adding/Removing the toppings & part of Iteration 3
$(document).ready(function() {

    var roniButton = $('.btn-pepperonni');
    var myRoni = $('.pep');

    roniButton.removeClass('active');
    myRoni.removeClass('active');

    myRoni.hide();

    roniButton.click(function(){
      myRoni.fadeToggle();
      roniButton.toggleClass('active');
    });

    var mushroomButton = $('.btn-mushrooms');
    var myMushroom = $('.mushroom');

    mushroomButton.removeClass('active');
    myMushroom.hide();


    mushroomButton.click(function(){
      myMushroom.fadeToggle();
      mushroomButton.toggleClass('active');
    });

    var greenButton = $('.btn-green-peppers');
    var greenPeppers = $('.green-pepper');

    greenButton.removeClass('active');
    greenPeppers.hide();

    greenButton.click(function(){
      greenPeppers.fadeToggle();
      greenButton.toggleClass('active');
    });

});

// Iteration 2 - Sauce and Crust & part of Iteration 3
$(document).ready(function() {
    var mySauce = $('.sauce');
    var sauceButton = $('.btn-sauce');
    mySauce.removeClass('sauce-white');
    sauceButton.removeClass('active');

    sauceButton.click(function(){
      mySauce.toggleClass('sauce-white');
      sauceButton.toggleClass('active');
    });


    var myCrust = $('.crust');
    var crustButton = $('.btn-crust');
    myCrust.removeClass('crust-gluten-free');
    crustButton.removeClass('active');

    crustButton.click(function(){
      myCrust.toggleClass('crust-gluten-free');
      crustButton.toggleClass('active');
    });

});

//Iteration 3 - Change buttons
