(function () {
    const menuButtons = document.querySelectorAll(".menu__item");
    let activeButton = document.querySelector(".menu__item.active");
  
    function setLineWidth(t, e) {
      let i = t.offsetWidth + "px";
      e.style.setProperty("--lineWidth", i);
    }
  
    function handleTransition(t, e) {
      t.addEventListener("transitionend", i => {
        if ("flex-grow" == i.propertyName && t.classList.contains("active")) {
          e.classList.add("active");
        }
      });
    }
  
    menuButtons.forEach(t => {
      let e = t.querySelector(".menu__text");
      setLineWidth(e, t);
      window.addEventListener("resize", () => {
        setLineWidth(e, t);
      });
      t.addEventListener("click", function () {
        if (!this.classList.contains("active")) {
          this.classList.add("active");
          if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
          }
          handleTransition(this, e);
          activeButton = this;
        }
      });
    });
  })();
  