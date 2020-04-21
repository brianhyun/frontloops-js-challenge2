// When "change tab" button is clicked, change css of tab headers and tab content.
$(".btn").click(function() {
  var tabNumInputVal = $("#tab-number-input")[0].valueAsNumber;
  if (tabNumInputVal > 3 || tabNumInputVal < 0 || tabNumInputVal === "") {
    alert("Valid entries: numbers between 1 and 3.");
  }
    // tabNumInputVal is a string
    // If you wish to grab a number then grab valueAsNumber member.
  var tabId = "tab-" + tabNumInputVal;
    // take advantage of automatic type cast to string
  tabHeaderBoldStyling(tabId);
  $(".tab-content-para").text($("#tab-" + tabNumInputVal)[0].innerText + " Content");
});

// When tab headers are clicked, change tab content.
$(".tab").click(function(event) {
  tabHeaderBoldStyling(event.target.id);
  $(".tab-content-para").text(event.target.innerText + " Content");
});

function tabHeaderBoldStyling(tabId) {
  $(".tab").addClass("unclicked");
  $("#" + tabId).removeClass("unclicked");
  $("#" + tabId).addClass("clicked");
}
