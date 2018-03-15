const CLIC1 = document.getElementsByClassName("row-item");

let letra = "X";

for (let i = 0; i < CLIC1.length; i++) {
	CLIC1[i].addEventListener('click', mostrar);
	
	function mostrar(e) {

		if (e.target.innerHTML === "X" || e.target.innerHTML === "0") {
			e.target === innerHTML;

		}else if (letra === "X") {
			CLIC1[i].innerHTML = "X";
			letra = "0";
		}else{
			CLIC1[i].innerHTML = "0";
			letra = "X";
		}

			
		if((CLIC1[0].innerHTML === CLIC1[1].innerHTML && CLIC1[1].innerHTML === CLIC1[2].innerHTML &&
			CLIC1[0].innerHTML != "" && CLIC1[1].innerHTML != "" && CLIC1[2].innerHTML != "") ||
				(CLIC1[3].innerHTML === CLIC1[4].innerHTML && CLIC1[4].innerHTML === CLIC1[5].innerHTML && 
		 		 CLIC1[3].innerHTML != "" && CLIC1[4].innerHTML != "" && CLIC1[5].innerHTML != "") ||
					(CLIC1[6].innerHTML === CLIC1[7].innerHTML && CLIC1[7].innerHTML === CLIC1[8].innerHTML && 
				 	 CLIC1[6].innerHTML != "" && CLIC1[7].innerHTML != "" && CLIC1[8].innerHTML != "") ||
		 		 		(CLIC1[2].innerHTML === CLIC1[4].innerHTML && CLIC1[4].innerHTML === CLIC1[6].innerHTML && 
				 	 	 CLIC1[2].innerHTML != "" && CLIC1[4].innerHTML != "" && CLIC1[6].innerHTML != "") ||
		 		 			(CLIC1[0].innerHTML === CLIC1[4].innerHTML && CLIC1[4].innerHTML === CLIC1[8].innerHTML && 
				 	 	 	 CLIC1[0].innerHTML != "" && CLIC1[4].innerHTML != "" && CLIC1[8].innerHTML != "") ||
		 		 				(CLIC1[2].innerHTML === CLIC1[5].innerHTML && CLIC1[5].innerHTML === CLIC1[8].innerHTML && 
				 	 	 	 	 CLIC1[2].innerHTML != "" && CLIC1[5].innerHTML != "" && CLIC1[8].innerHTML != "") ||
									(CLIC1[1].innerHTML === CLIC1[4].innerHTML && CLIC1[4].innerHTML === CLIC1[7].innerHTML && 
					 	 	 	 	 CLIC1[1].innerHTML != "" && CLIC1[4].innerHTML != "" && CLIC1[7].innerHTML != "") ||
										(CLIC1[0].innerHTML === CLIC1[3].innerHTML && CLIC1[3].innerHTML === CLIC1[6].innerHTML && 
					 		 	 	 	 CLIC1[0].innerHTML != "" && CLIC1[3].innerHTML != "" && CLIC1[6].innerHTML != "")) {
			setTimeout(function(){
				alert("GANÓ LA " + e.target.innerHTML);
				for (let i = 0; i < CLIC1.length; i++) {
					CLIC1[i].innerHTML = "";
				}
			}, 1000);
	}
}
}