//Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor.
window.onload=function(){
  document.getElementById('boton').onclick=ordenaTres;
}

function ordenaTres() {
    var numero1=parseInt(document.getElementById('numero1').value);
    var numero2=parseInt(document.getElementById('numero2').value);
    var numero3=parseInt(document.getElementById('numero3').value);

    if(numero1==numero2 || numero1==numero3 || numero3==numero2){
      document.getElementById('resultado').innerHTML="No son validos valores repetidos";
    }
    else{

    if(numero1<numero2){

            if(numero2<numero3){
              document.getElementById('resultado').innerHTML=numero1+"<"+numero2+"<"+numero3;
            }
            else{
              document.getElementById('resultado').innerHTML=numero1+"<"+numero3+"<"+numero2;
            }


        }

        if(numero2<numero1 && numero2<numero3){
              if(numero1<numero3){
                  document.getElementById('resultado').innerHTML=numero2+" < "+numero1+" < "+numero3;
                }
              else{
                document.getElementById('resultado').innerHTML=numero2+" < "+numero3+" < "+numero1;
              }
            }
        if(numero3<numero1 && numero3<numero2){
              if(numero1<numero2){
                document.getElementById('resultado').innerHTML=numero3+" < "+numero1+" < "+numero2;

              }
              else{
                document.getElementById('resultado').innerHTML=numero3+" < "+numero2+" < "+numero1;
              }
            }
          }





}
