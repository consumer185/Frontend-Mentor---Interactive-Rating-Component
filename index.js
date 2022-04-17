$(".numberButton").click(function(){
  $("#userSubmittedRating").html(this.innerHTML);
});


$("#submitButton").click(function(){
$("#ratingState").hide();
$("#thankyouState").show();
});
