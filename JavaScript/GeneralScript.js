let isOpen = false;

function toggleMenu() {
  const sideNav = document.getElementById("sideNav");
  const sidenavLine = document.getElementById("sidenavLine");
  const ul = document.getElementById("ulSidenav");
  const links = ul.getElementsByTagName("a");
  const spans = ul.getElementsByTagName("span");
  if (isOpen) {
    // collapse
    sideNav.style.width = "75px";
    sideNav.style.backgroundColor = "rgba(13, 13, 16, 0)";

    for (let i = 0; i < links.length; i++) {
      links[i].style.margin = "0 0";
      const img = links[i].getElementsByTagName("img")[0];
      links[i].style.flexDirection = "column";
      links[i].style.justifyContent = "center";
      links[i].style.textAlign = "center";
      links[i].style.margin = "0 8px";
      links[i].style.padding = "9px 0";
      links[i].style.width = "76%";
      links[i].style.marginBottom = "3px";
      if (img) img.style.marginRight = "0px";
    }

    for (let i = 0; i < spans.length; i++) {
      spans[i].style.fontSize = "11px";
    }

    sidenavLine.style.marginTop = "25px";
    sidenavLine.style.width = "67%";
  } else {
    // expand
    sideNav.style.width = "250px";
    sideNav.style.backgroundColor = "rgba(13, 13, 16, 1)";

    for (let i = 0; i < links.length; i++) {
      links[i].style.margin = "25px 0";
      const img = links[i].getElementsByTagName("img")[0];
      links[i].style.flexDirection = "row";
      links[i].style.justifyContent = "flex-start";
      links[i].style.textAlign = "left";
      links[i].style.margin = "0 6px";
      links[i].style.marginBottom = "12px";
      links[i].style.padding = "10px 15px";
      links[i].style.paddingRight = "26px";
      links[i].style.width = "76%";
      if (img) img.style.marginRight = "20px";
    }

    for (let i = 0; i < spans.length; i++) {
      spans[i].style.fontSize = "20px";
    }

    sidenavLine.style.marginTop = "30px";
    sidenavLine.style.width = "90%";
  }

  isOpen = !isOpen;
}
window.addEventListener("scroll", function () {
  const topbar = document.querySelector(".topbar");

  if (window.scrollY > 0) {
    topbar.style.background = "rgba(13, 13, 16, 1)";
    topbar.style.borderBottom = "1px solid #9e5e7a";
  } else {
    topbar.style.background = "rgba(13, 13, 16, 0)";
    topbar.style.borderBottom = "0px solid #9e5e7a";
  }
});