// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

    var totalPrice = 10;
    var priceNumber = $('strong').empty();
    console.log(priceNumber);
    priceNumber.append('$' + totalPrice);
    console.log(totalPrice);

    var roniButton = $('.btn-pepperonni');
    var myRoni = $('.pep');
    var roniPrice = $('.price li:first-child');
    var roniCost = 1;

    roniButton.removeClass('active');

    myRoni.hide();
    roniPrice.hide();

    roniButton.click(function(){
      myRoni.fadeToggle();
      roniButton.toggleClass('active');
      roniPrice.toggle();
      if (roniButton.hasClass('active')) {
      totalPrice += roniCost;
    }
      else {
        totalPrice -= roniCost;
      }
      console.log(totalPrice);
    });

    var mushroomButton = $('.btn-mushrooms');
    var myMushroom = $('.mushroom');
    var mushroomPrice = $('.price li:nth-child(2)');
    var mushroomCost = 1;

    mushroomButton.removeClass('active');

    myMushroom.hide();
    mushroomPrice.hide();


    mushroomButton.click(function(){
      myMushroom.fadeToggle();
      mushroomButton.toggleClass('active');
      mushroomPrice.toggle();
      if (mushroomButton.hasClass('active')) {
      totalPrice += mushroomCost;
    }
      else {
        totalPrice -= mushroomCost;
      }
      console.log(totalPrice);
    });

    var greenButton = $('.btn-green-peppers');
    var greenPeppers = $('.green-pepper');
    var greenPrice = $('.price li:nth-child(3)');
    var greenCost = 1;

    greenButton.removeClass('active');

    greenPeppers.hide();
    greenPrice.hide();

    greenButton.click(function(){
      greenPeppers.fadeToggle();
      greenButton.toggleClass('active');
      greenPrice.toggle();
      if (greenButton.hasClass('active')) {
      totalPrice += greenCost;
    }
      else {
        totalPrice -= greenCost;
      }
      console.log(totalPrice);
    });

    var mySauce = $('.sauce');
    var sauceButton = $('.btn-sauce');
    var saucePrice = $('.price li:nth-child(4)');
    var sauceCost = 3;

    mySauce.removeClass('sauce-white');
    sauceButton.removeClass('active');

    saucePrice.hide();

    sauceButton.click(function(){
      mySauce.toggleClass('sauce-white');
      sauceButton.toggleClass('active');
      saucePrice.toggle();
      if (sauceButton.hasClass('active')) {
      totalPrice += sauceCost;
    }
      else {
        totalPrice -= sauceCost;
      }
      console.log(totalPrice);
    });


    var myCrust = $('.crust');
    var crustButton = $('.btn-crust');
    var crustPrice = $('.price li:nth-child(5)');
    var crustCost = 5;

    myCrust.removeClass('crust-gluten-free');
    crustButton.removeClass('active');

    crustPrice.hide();

    crustButton.click(function(){
      myCrust.toggleClass('crust-gluten-free');
      crustButton.toggleClass('active');
      crustPrice.toggle();
      if (crustButton.hasClass('active')) {
      totalPrice += crustCost;
    }
      else {
        totalPrice -= crustCost;
      }
      console.log(totalPrice);
    });

});
