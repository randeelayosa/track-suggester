$(document).ready(function() {
  $("#questionnaire").submit(function(event){
    var pathOption = $("#path").val();
    var placeOption = $("#place").val();
    var companyOption = $("#company").val();
    var levelOption = $("#level").val();
    var activityOption = $("#activity").val();
    var language = 0;


    if (pathOption === "1"){
      language += 1;
    } else {
      language += 10;
    }

    if (placeOption === "1"){
      language += 1;
    } else {
      language += 10;
    }

    if (companyOption === "1"){
      language += 1;
    } else {
      language += 10;
    }

    if (levelOption === "1"){
      language += 1;
    } else {
      language += 10;
    }

    if (activityOption === "1"){
      language += 1;
    } else {
      language += 10;
    }


    if (language >= 30){
      $("#well-prompt").toggle();
      $("#answer").fadeToggle();
      $("#javaResult").fadeToggle();
      $("#csharpResult").fadeToggle();
    } else if (language <= 20){
      $("#well-prompt").toggle();
      $("#answer").fadeToggle();
      $("#rubyResult").fadeToggle();
      $("#phpResult").fadeToggle();
      $("#cssResult").fadeToggle();
    } else if (language === 0){
      alert("Please choose an option from each menu.");
    }


    $("#questionnaire").toggle();
    event.preventDefault();
  });
});
