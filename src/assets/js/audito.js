// console.log("bizit");
for (
  var accordions = document.getElementsByClassName("accordion-btn"), i = 0;
  i < accordions.length;
  i++
)
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("is-open");
    var t = this.nextElementSibling;
    t.style.maxHeight
      ? (t.style.maxHeight = null)
      : (t.style.maxHeight = t.scrollHeight + "px");
  });
$(document).ready(function (t) {
  $("#a_more").click(function () {
    (curSize = parseInt($("html").css("font-size")) + 2) <= 24 &&
      $("html").css("font-size", curSize);
  }),
    $("#a_less").click(function () {
      (curSize = parseInt($("html").css("font-size")) - 2) >= 14 &&
        $("html").css("font-size", curSize);
    }),
    $("#a_normal").click(function () {
      $("html").css("font-size", "initial");
    }),
    $("#high_contrast").click(function () {
      $("html").hasClass("altoContraste")
        ? ($("html").removeClass("altoContraste"),
          $(".navbar-default").removeClass("navbar-inverse"))
        : ($("html").addClass("altoContraste"),
          $(".navbar-default").addClass("navbar-inverse"));
    });
});
