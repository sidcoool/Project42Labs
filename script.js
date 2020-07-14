function bodyScroll() {
  console.log(screen.width);
  let x = document.getElementsByClassName("sChange");
  let btn = document.getElementById("sChange");
  let nav = document.getElementById("navBack");

  if (window.pageYOffset > 0) {
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


  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("navbar-toggler")[0];

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close1")[0];

  var mcom = document.getElementsByClassName("modal-content1")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
    mcom.style.animation = "navSlider 0.5s linear";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  let job = document.getElementById("job").checked;

  if (job) {
    // console.log("hello")
    document.getElementById("showJob").style.display = "flex";
    document.getElementById("showSolution").style.display = "none";
    // document.getElementById("showSolution").style.backgroundColor = "red";
  }
  else {
    document.getElementById("showJob").style.display = "none";
    document.getElementById("showSolution").style.display = "flex";
  }
});


function toggleLooking() {
  let job = document.getElementById("job").checked;
  // console.log(job)

  if (job) {
    document.getElementById("showJob").style.display = "flex";
    document.getElementById("showSolution").style.display = "none";
  }
  else {
    document.getElementById("showJob").style.display = "none";
    document.getElementById("showSolution").style.display = "flex";
  }
}




function onScroll2() {
  document.getElementById('navBack').style.backgroundColor = 'white'

  if (window.pageYOffset == 0) {
    document.getElementById('navBack').style.boxShadow = 'none'
  }
  else {
    document.getElementById('navBack').style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.15)'
  }
}


function arrowToggle(e) {

  if (e.className.includes("down")) {
    e.className = "fas fa-chevron-up font-23 color-red"
  }
  else {
    e.className = "fas fa-chevron-down font-23 color-red"
  }
}


