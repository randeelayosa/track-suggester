$(document).ready(function() {
  $("#questionnaire").submit(function(event){
    var pathOption = $("#path").val();
    var placeOption = $("#place").val();
    var companyOption = $("#company").val();
    var levelOption = $("#level").val();
    var activityOption = $("#activity").val();



    if (pathOption === "1" && placeOption === "1" && companyOption === "1" && levelOption === "1" && activityOption === "1") {
      language = 1;
    }
    if (pathOption === "2" && placeOption === "2" && companyOption === "2" && levelOption === "2" && activityOption === "2"){
      language = 2;
    }
    if (pathOption === "3" && placeOption === "3" && companyOption === "3" && levelOption === "3" && activityOption === "3"){
      language = 3;
    }
    if (pathOption === "4" && placeOption === "4" && companyOption === "4" && levelOption === "4" && activityOption === "4"){
      language = 4;
    }



    

    $("#questionnaire").toggle();
    $("#cssResult").fadeToggle();
    $("#rubyResult").fadeToggle();
    $("#phpResult").fadeToggle();
    $("#javaResult").fadeToggle();
    $("#csharpResult").fadeToggle();






    // var language = $("#path").val();
    //
    // switch (language) {
    //   default:
    //     text = "The learning track you should pursue is:"
    //     $("#rubyResult").show();
    //     break;
    //   case 1:
    //     text = "The learning track you should pursue is:"
    //     $("#phpResult").show();
    // }


    event.preventDefault();
  });
});
