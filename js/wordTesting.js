function test(){
  var fr1 = document.getElementById("fr1").value;
  var sv1 = document.getElementById("sv1").value;

  localStorage.setItem("fr1", fr1);
  localStorage.setItem("sv1", sv1);
	
	pageRedirect()	
}

function pageRedirect() {
  window.location.replace(window.location.href + "/typing");
}      
