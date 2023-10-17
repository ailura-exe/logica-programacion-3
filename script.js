function obtenerFactorial(){
    const numberInput=document.getElementById("number");
    const number=parseInt(numberInput.value);
    let factorial=1;

    if (isNaN(number)||number<0){
        alert("El valor ingresado no es un número o es negativo, intente de nuevo");
        document.getElementById("number").value = "";
        return;
    }else{
        for(let i=2; i<=number; i++){
            factorial*=i;
        }
    }
    console.log(factorial);
    document.getElementById("number").value="";
    let resultado=document.getElementById("resultadoFactorial");
    resultado.innerHTML="El factorial de "+number+ " es "+factorial;
}