# Aplicação de Sorteio de Amigo Secreto

Este projeto consiste em uma aplicação web que permite aos usuários gerenciar uma lista de amigos e realizar um sorteio aleatório para determinar quem será o "amigo secreto". A aplicação foi desenvolvida com foco na simplicidade e usabilidade.

---

## Funcionalidades

1. **Adicionar Nomes**
   - Os usuários podem escrever o nome de um amigo em um campo de texto e adicioná-lo à lista clicando no botão "Adicionar".
   - Entradas vazias são rejeitadas, com um alerta exibido solicitando um nome válido.

2. **Visualizar Lista**
   - Todos os nomes inseridos são exibidos dinamicamente em uma lista visível na página.

3. **Sorteio Aleatório**
   - Um botão "Sortear Amigo" permite que o usuário selecione aleatoriamente um nome da lista.
   - O nome sorteado é exibido na página de forma destacada.

---

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da interface.
- **JavaScript**: Lógica para manipulação de dados e interatividade.

---

## Como Usar

1. **Adicionar Nomes**:
   - Insira o nome de um amigo no campo de texto.
   - Clique no botão "Adicionar".
   - O nome será exibido na lista abaixo.

2. **Validar Entrada**:
   - Certifique-se de que o campo de texto não esteja vazio antes de clicar em "Adicionar".
   - Caso contrário, um alerta aparecerá pedindo uma entrada válida.

3. **Sortear Amigo**:
   - Após adicionar os nomes, clique no botão "Sortear Amigo".
   - Um nome será selecionado aleatoriamente e exibido na tela.

---

## Estrutura do Projeto

```
challenge-oracle/
├── index.html    # Estrutura principal da aplicação
├── style.css     # Estilos personalizados
├── app.js        # Lógica da aplicação
└── assets/       # Arquivos estáticos (imagens, fontes, etc.)
```

---

## Melhorias Futuras

- Permitir a remoção de nomes da lista.
- Adicionar uma confirmação antes de realizar o sorteio.
- Permitir salvar a lista de nomes no armazenamento local do navegador (localStorage).
- Implementar um tema alternativo para a interface.

---

## Contribuições

Sinta-se à vontade para sugerir melhorias ou relatar problemas por meio de issues neste repositório. Este projeto é aberto a contribuições de toda a comunidade!

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


