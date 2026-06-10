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