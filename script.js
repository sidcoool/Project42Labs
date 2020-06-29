function bodyScroll() {
  console.log(screen.width);
  let x = document.getElementsByClassName("sChange");
  let btn = document.getElementById("sChange");
  let nav = document.getElementById("navBack");

  if (window.pageYOffset > 340) {
    // console.log(x)
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "black";
      btn.className = "btn1";
      nav.style.backgroundColor = "rgba(255, 255, 255, 1)";
      nav.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.15)"
    }
  } else if (screen.width > 900) {
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "white";
      btn.className = "btn2";
      nav.style.backgroundColor = "transparent";
      nav.style.boxShadow = "none"
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (screen.width < 900) {
    console.log(screen.width);
    let x = document.getElementsByClassName("sChange");
    let btn = document.getElementById("sChange");
    let nav = document.getElementById("navBack");

    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "black";
      btn.className = "btn1";
      nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
  }
});
