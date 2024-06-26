  var dadosCarregados = false;

        function loadXMLDoc() {
            console.log("Mostrar dados dos jogadores...");

            var table = document.getElementById("jogadoresTable").getElementsByTagName('tbody')[0];

            if (dadosCarregados) {
                console.log("Esconder dados dos jogadores...");
                // Esconder os dados
                while (table.rows.length > 0) {
                    table.deleteRow(0);
                }
                dadosCarregados = false;
                document.getElementById("toggleButton").innerText = "Carregar Dados dos Jogadores";
            } else {
                console.log("Carregar dados dos jogadores...");
                // Carregar os dados
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("Arquivo XML carregado com sucesso.");
                        var xmlDoc = this.responseXML;
                        var jogadores = xmlDoc.getElementsByTagName("jogador");

                        for (var i = 0; i < jogadores.length; i++) {
                            var row = table.insertRow();
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            cell1.innerHTML = jogadores[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
                            cell2.innerHTML = jogadores[i].getElementsByTagName("equipa")[0].childNodes[0].nodeValue;
                            cell3.innerHTML = jogadores[i].getElementsByTagName("posicao")[0].childNodes[0].nodeValue;
                            // Obtém-se os dados dos jogadores por: nome, equipa, posicao guardados no ficheiro XML
                        }
                        dadosCarregados = true;
                        document.getElementById("toggleButton").innerText = "Esconder Dados dos Jogadores";
                    } else if (this.readyState == 4) {
                        console.error("Erro ao carregar o arquivo XML: " + this.status);
                    }
                };
                xmlhttp.open("GET", "jogadores.xml", true);
                xmlhttp.send();
            }
        }