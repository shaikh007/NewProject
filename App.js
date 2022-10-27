function openNav() {

    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("open").style.display = "none";
  
  }
  
  function closeNav() {
      document.getElementById("main").style.marginLeft = "0";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("open").style.display = "inline-block";
  
  }
  function openLink(evt, linkName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " active";
  }



