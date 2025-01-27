
            const nomeAmigoInput = document.getElementById('amigo');
            const listaAmigos = document.getElementById('listaAmigos');
            const resultado = document.getElementById('resultado');
            const amigos = [];

            function adicionarAmigo() {
                const nome = nomeAmigoInput.value.trim();
                if (!nome) return alert('Nome adicionado');
                if (amigos.includes(nome)) return alert('Este amigo já foi adicionado.');

                amigos.push(nome);
                nomeAmigoInput.value = ''; 
                atualizarLista();
            }

            function atualizarLista() {
                listaAmigos.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
            }

            function sortearAmigo() {
                if (amigos.length < 2) return alert('Adicione pelo menos dois amigos.');

                const sorteados = [...amigos];
                const resultados = [];

                amigos.forEach(amigo => {
                    const candidatos = sorteados.filter(sorteado => sorteado !== amigo); 
                    if (candidatos.length === 0) return alert('Não foi possível realizar o sorteio.');

                    const sorteadoIndex = Math.floor(Math.random() * candidatos.length);
                    const sorteado = candidatos[sorteadoIndex];
                    resultados.push(`${amigo} → ${sorteado}`);

                    const sorteadoIndexOriginal = sorteados.indexOf(sorteado);
                    sorteados.splice(sorteadoIndexOriginal, 1);
                });

                resultado.innerHTML = resultados.join('<br>');
            }

            document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
            document.querySelector('.button-draw').addEventListener('click', sortearAmigo);

