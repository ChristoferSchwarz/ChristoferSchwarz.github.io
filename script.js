    //   Parallaxeffekt på om mig-texten
function parallax() {
        var s = document.getElementById("whotext");
        var yPos = 0 - window.pageYOffset / 20;
        s.style.top = 10 - yPos + "%";
      }

      window.addEventListener("scroll", function () {
        parallax();
      });

      //Färgslumparen för banners
      function color() {
        // Array med alla färger
        var colors = [
          "#D1343B",
          "#3661B4",
          "#49AC59",
          "#CB9CF2",
          "#FFC870",
          "#43B0B0",
          "#7B6ADE",
          "#E58047",
        ];

        // Väljer en random färg från arrayen ovan
        var random_color = colors[Math.floor(Math.random() * colors.length)];

        // Ändrar färgerna till den som precis valdes
        document.getElementById("header").style.backgroundColor = random_color;
        document.getElementById("menuli1").style.background = random_color;
        document.getElementById("menuli2").style.background = random_color;
        document.getElementById("menuli3").style.background = random_color;
        document.getElementById("whatintro").style.backgroundColor =
          random_color;
        document.getElementById("footer").style.backgroundColor = random_color;
      }
      // Kör funktionen när sidan laddar
      window.onload = color;

      //Scrolla upp-knapp
      scrollknapp = document.getElementById("scrollaupp");

      //Visar knappen när man scrollat 500px
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          scrollknapp.style.visibility = "visible";
          scrollknapp.style.opacity = "0.9";
        } else {
          scrollknapp.style.opacity = "0";
        }
      }

      // Funktionen som scrollar upp när man klickar på knappen
      function scrollaupp() {
        document.body.scrollTop = 0; // För Safari
        document.documentElement.scrollTop = 0;
      }
      function kontakt() {
        document.getElementById("error").style.visibility = "visible";
      }