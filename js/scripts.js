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

    if (activityOption === "10"){
      language += 10;
    } else {
      language += 100;
    }

    $("#questionnaire").toggle();
    event.preventDefault();

    if (language >= 100){
      $("#frontend-prompt").toggle();
      $("#cssResult").fadeToggle();
    } else if (language >= 30){
      $("#backend-prompt").toggle();
      $("#javaResult").fadeToggle();
      $("#csharpResult").fadeToggle();
    } else {
      $("#backend-prompt").toggle();
      $("#rubyResult").fadeToggle();
      $("#phpResult").fadeToggle();
    }
  });
});
