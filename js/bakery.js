(function ($) {
  $.fn.bakery = function () {
    var horizontal_bakery = [
      '<li class="li-with-bakery"><a href="#" id="Production">Menu</a></li>',
      '<li><a href="#" id="Register">Register</a></li>',
      '<li><a href="#" id="Login">Login</a></li>',
    ];

    var vertical_bakery_menu = [
      '<li><a id="Desserts" href="Menu.html">Desserts</a></li>',
      '<li><a id="Love_Bakery" href="AboutUS.html">Love_Bakery</a></li>',
      '<li><a id="Support" href="Contacts.html">Support</a></li>',
    ];

    $(this).append('<div class="bakery"></div>');
    $(this).find(".bakery").append("<ul></ul>");

    for (i = 0; i < horizontal_bakery.length; i++) {
      $(this).find(".bakery ul").append(horizontal_bakery[i]);
    }

    $(this).find(".li-with-bakery").append('<ul class="menu-bakery"></ul>');
    for (i = 0; i < vertical_bakery_menu.length; i++) {
      $(this).find(".menu-bakery").append(vertical_bakery_menu[i]);
    }
    $(this).find(".menu-bakery").hide();

    $(this).on("mouseenter", "#Production", function () {
      $(this).parent().find(".menu-bakery").show();
    });

    $(this).on("mouseleave", ".menu-bakery", function () {
      $(this).hide();
    });

    $(this)
      .find(".menu-bakery a")
      .click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        window.location.href = href;
      });

    $(this).on("click", "#Register", function (e) {
      e.preventDefault();

      window.location.href = "register.html";
    });

    $(this).on("click", "#Login", function (e) {
      e.preventDefault();

      window.location.href = "login.html";
    });
  };
})(jQuery);

$(document).ready(function () {
  $(".header").bakery();

  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  if (window.location.href.indexOf("AboutUS.html") > -1) {
    $("body").append(
      '<div class="modal"><div class="modal-content"><span class="close">&times;</span><p>Special Discount! Visit Love_Bakery now and get 10% off on all items!</p></div></div>'
    );

    if (currentHour >= 12 && currentHour < 17) {
      $(".modal").show();
    }

    $(".close").click(function () {
      $(".modal").hide();
    });

    $(window).click(function (e) {
      if ($(e.target).hasClass("modal")) {
        $(".modal").hide();
      }
    });
  }

  $("#order-form").submit(function (e) {
    e.preventDefault();
    alert("Your order has been placed successfully!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");
  const successModal = document.getElementById("success-modal");
  const closeModalBtn = successModal.querySelector(".close");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = registrationForm.querySelector("#email").value;
    const password = registrationForm.querySelector("#password").value;

    successModal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    successModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === successModal) {
      successModal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = loginForm.querySelector("#email").value;
    const password = loginForm.querySelector("#password").value;

    if (password === "1111") {
      loginMessage.textContent = "Logged in";
      loginMessage.style.color = "green";
      loginMessage.style.display = "block";
    } else {
      loginMessage.textContent = "Incorrect password. Please try again.";
      loginMessage.style.color = "red";
      loginMessage.style.display = "block";
    }
  });
});
