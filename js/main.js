const CLIC1 = document.getElementsByClassName("row-item");

let letra = "X";
let letra1 = "0";

for (let i = 0; i < CLIC1.length; i++) {
	CLIC1[i].addEventListener('click', mostrar);
	
	function mostrar(e) {
		e = CLIC1[i].innerHTML = letra;
		
		if (letra = 0) {
			CLIC1[i].innerHTML = letra1;
		}

		console.log(e);
	}

}