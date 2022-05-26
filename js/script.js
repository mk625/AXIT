// variables
let headerMenu = document.getElementById("headerMenu");
let effect_tabs = document.getElementsByClassName("effect_tab");
let effect_tab_contents = document.getElementsByClassName("effect_tab_content");
// \variables

// onInit
effect_tabs[0].classList.add("active");
effect_tab_contents[0].style.display = "block";
// \onInit

// functions
function onTabChange(index) {
  for (i = 0; i < effect_tabs.length; i++) {
    effect_tabs[i].classList.remove("active");
    effect_tab_contents[i].style.display = "none";
  }

  effect_tabs[index].classList.add("active");
  effect_tab_contents[index].style.display = "block";
}

function menuToggle() {
  if (headerMenu.style.height !== "0px") {
    headerMenu.style.height = 0 + "px";
  } else {
    headerMenu.style.height = headerMenu.scrollHeight + "px";
  }
}
// \functions
