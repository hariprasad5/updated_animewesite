function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablink");
  for (i = 0; i < tablinks.length; i++) {
    document.getElementsByClassName(pageName)[i].style.display = "block";
  }

}

document.getElementById("animeTopTab").click();