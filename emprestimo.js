// PROGRAMA PARA CÁLCULO DE EMPRÉSTIMO


function chamar () {

   var vCasa = parseFloat("");
   var vSal = parseFloat("");
   var anos = parseInt("");

   vCasa = document.getElementById('valor').value;
   vSal = document.getElementById('salario').value;
   anos = document.getElementById('anos').value;

   if (anos > 20) {

       document.getElementById('res').style.display = "block";
       document.getElementById('resultado').innerHTML = ("Tempo máximo não pode ultrapassar 20 anos!!");
       
   }

   else {
      
      var vPrestacao = vCasa/(anos*12);
   
      if ( (vCasa <= 0) || (vSal <= 0) || (anos < 1) ) {

         document.getElementById('resultado').innerHTML = "Valor Inválido!";
         document.getElementById('resultado1').innerHTML = null;

      }

      else if (vPrestacao <= 600) {
         document.getElementById('res').style.display = "block";
         document.getElementById('resultado').innerHTML = "Somente Prestaçoes acima de 600 Reais";
         document.getElementById('resultado1').innerHTML = null;
      }

      else {
      
         if (vPrestacao > (vSal*0.3)) {
       
            document.getElementById('res').style.display = "block";
            document.getElementById('resultado').innerHTML =  "Seu Empréstimo foi negado!!";
       
         }

         else if (vPrestacao <=  (vSal*0.3)) {

            document.getElementById('res').style.display = "block";
            document.getElementById('resultado').innerHTML = "Seu Empréstimo foi aprovado!!"
            document.getElementById('resultado1').innerHTML =  ("serão " +  (anos*12) + " prestaçoes de " + vPrestacao.toFixed(2) + " Reais");

         }  
   }

   }

}


function limpar() {

    document.getElementById('res').style.display = "none";
    document.getElementById('resultado').innerHTML = null;
    document.getElementById('resultado1').innerHTML = null;
   
}