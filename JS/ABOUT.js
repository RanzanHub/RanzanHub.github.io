
let modoEscuro = false;

        function alternarCores() {
            if (modoEscuro) {
                document.body.style.backgroundColor = "#518ac8";
                document.body.style.backgroundColor = "#0f172a";
            } else {
                document.body.style.backgroundColor = "#0f172a";
                document.body.style.backgroundColor = "#518ac8";
            }

            modoEscuro = !modoEscuro;
        }
 let tamanhoFonte = 16;

        function aumentarFonte() {
            tamanhoFonte += 2;
            document.body.style.fontSize = tamanhoFonte + "px";
        }

        function diminuirFonte() {
            if (tamanhoFonte > 8) {
                tamanhoFonte -= 2;
                document.body.style.fontSize = tamanhoFonte + "px";
            }
        }