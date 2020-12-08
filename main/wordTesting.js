function test(){
  var fr1 = document.getElementById("fr1").value;
  var sv1 = document.getElementById("sv1").value;
  var fr2 = document.getElementById("fr2").value;
  var sv2 = document.getElementById("sv2").value;
	var fr3 = document.getElementById("fr3").value;
  var sv3 = document.getElementById("sv3").value;
  var fr4 = document.getElementById("fr4").value;
  var sv4 = document.getElementById("sv4").value;

  localStorage.setItem("fr1", fr1);
  localStorage.setItem("sv1", sv1);
	localStorage.setItem("fr2", fr2);
  localStorage.setItem("sv2", sv2);
	localStorage.setItem("fr3", fr3);
  localStorage.setItem("sv3", sv3);
	localStorage.setItem("fr4", fr4);
  localStorage.setItem("sv4", sv4);
}