function calcularInflacion() {
    let valorInicial = 0;
    let tasaInflacionaria = 0;
    let tiempoTranscurrido = 0;
    let realizarOtraConsulta = true;

    while(realizarOtraConsulta) {
        valorInicial = parseFloat(prompt("Ingrese el valor inicial monetario"));
        tasaInflacionaria = parseFloat(prompt("Ingrese la tasa inflacionaria"));
        tiempoTranscurrido = parseInt(prompt("Ingrese el tiempo en años"));

            while (isNaN(valorInicial) || isNaN(tasaInflacionaria) || isNaN(tiempoTranscurrido) || valorInicial <= 0 || tasaInflacionaria <= 0 || tiempoTranscurrido <= 0) {
                alert("Debes ingresar un numero valido, mayor a 0");
                valorInicial = parseFloat(prompt("Ingrese el valor inicial monetario"));
                tasaInflacionaria = parseFloat(prompt("Ingrese la tasa inflacionaria"));
                tiempoTranscurrido = parseInt(prompt("Ingrese el tiempo en años"));
            }; 

        const valorFuturo = valorInicial * Math.pow((1 + (tasaInflacionaria / 100)), tiempoTranscurrido);

        console.log(valorFuturo);
        realizarOtraConsulta = confirm("Luego de " + tiempoTranscurrido + " años, la cantidad de " + valorInicial + "$ es de " + valorFuturo.toFixed(2) + "$ ¿Desea realizar otra consulta?");
    };
};

calcularInflacion (); 