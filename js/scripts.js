$(document).ready(function() {
  $("#questionnaire").submit(function(event){
    alert("Submit works");
    var pathOption = $("#path").val();
    var placeOption = $("#place").val();
    var companyOption = $("#company").val();
    var levelOption = $("#level").val();
    var activityOption = $("#activity").val();
    var css = 5;


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


    if (language = 1){
      $("#rubyResult").show();
    } else if (language = 2){
      $("#phpResult").show();
    } else if (language = 3){
      $("#javaResult").show();
    } else if (language = 4){
      $("#csharpResult").show();
    } else {
      $("#cssResult").show();
    }


    $("#questionnaire").fadeToggle();

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


    alert("got to end");
    event.preventDefault();
  });
});
