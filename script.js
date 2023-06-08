var btnContainer = document.getElementById("searchbar");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("searchbar-content");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active2");

//         // If there's no active class
//         if (current.length < 0) {
//             current[0].className = current[0].className.add(" active2");
//         } else if (current.length >= 0) {
//             className.remove("active2");
//         }

//         // Add the active class to the current/clicked button
//         this.className += " active2";
//     });
// }

function toggleArrow(btns) {
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
      var current = this;
      for (var i = 0; i < btns.length; i++) {
        if (current != btns[i]) {
          btns[i].classList.remove("active2");
        } else if (current.classList.contains("active2") === true) {
          current.classList.remove("active2");
        } else {
          current.classList.add("active2");
        }
      }
      e.preventDefault();
    });
  }
}
toggleArrow(document.querySelectorAll(".arrow"));

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function revealleft() {
  var reveals = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 450;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealleft);

function revealright() {
  var reveals = document.querySelectorAll(".reveal3");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 450;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealright);

// popup searchbar

function togglePopupCategory() {
  document.getElementById("category-pop").classList.toggle("show-popup");
}

function togglePopupLocation() {
  document.getElementById("location-pop").classList.toggle("show-popup");
}

function togglePopupPrice() {
  document.getElementById("price-pop").classList.toggle("show-popup");
}

removePopup = function () {
  var arrow = document.getElementsByClassName("arrow");

  if (arrow.length > 0) {
    arrow[0].classList.remove("active2");
  }
};

// Price Pop Up Sliders
var slider = document.getElementById("myRange");
var output = document.getElementById("output");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

$("#submit-search").click(function () {
  $("#category-forms").submit(), $("#location-forms").submit();
});

// submitForms = function () {
//     document.getElementById("category-forms").submit();
//     document.getElementById("location-forms").submit();
//     document.getElementById("price-forms").submit();
// };

// $(document).ready(function () {
//     if ($("category-pop").hasClass("show-popup")) {
//         $(".location-pop").removeClass("show-popup");
//         $(".price-pop").removeClass("show-popup");
//     } else if ($("location-pop").hasClass("show-popup")) {
//         $(".category-pop").removeClass("show-popup");
//         $(".price-pop").removeClass("show-popup");
//     } else if ($("price-pop").hasClass("show-popup")) {
//         $(".location-pop").removeClass("show-popup");
//         $(".category-pop").removeClass("show-popup");
//     }
// });
