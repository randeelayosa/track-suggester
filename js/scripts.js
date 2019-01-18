$(document).ready(function() {
  $("#questionnaire").submit(function(event){
    var pathOption = $("#path").val();
    var placeOption = $("#place").val();
    var companyOption = $("#company").val();
    var levelOption = $("#level").val();
    var activityOption = $("#activity").val();
    var language = 0;

    //
    // if (pathOption === "1" && placeOption === "1" && companyOption === "1" && levelOption === "1" && activityOption === "1") {
    //   language = 1;
    // }
    // if (pathOption === "2" && placeOption === "2" && companyOption === "2" && levelOption === "2" && activityOption === "2"){
    //   language = 2;
    // }
    // if (pathOption === "3" && placeOption === "3" && companyOption === "3" && levelOption === "3" && activityOption === "3"){
    //   language = 3;
    // }
    // if (pathOption === "4" && placeOption === "4" && companyOption === "4" && levelOption === "4" && activityOption === "4"){
    //   language = 4;
    // }

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
      $("#answer").fadeToggle();
      $("#javaResult").fadeToggle();
      $("#csharpResult").fadeToggle();
    } else {
      $("#answer").fadeToggle();
      $("#rubyResult").fadeToggle();
      $("#phpResult").fadeToggle();
      $("#cssResult").fadeToggle();
    }


    $("#questionnaire").toggle();
    // $("#cssResult").fadeToggle();
    // $("#rubyResult").fadeToggle();
    // $("#phpResult").fadeToggle();
    // $("#javaResult").fadeToggle();
    // $("#csharpResult").fadeToggle();



    event.preventDefault();
  });
});
