##Desafio proposto em processo seletivo para vaga de Frontend Developer jr.

## Requisitos funcionais

A url base da API é [https://games-test-api-81e9fb0d564a.herokuapp.com/api/](https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/)

- O projeto deve ser feito usando React ou Next.JS
- Obter a lista de jogos em `/data`
- Apresentar um loader enquanto os dados são obtidos
- Apresentar os jogos em três colunas (no computador)
- Em cada card apresentar o título e imagem pelo ao menos
- Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular
- Quando a API retornar o `status code` 500, 502, 503, 504, 507, 508 ou 509 apresentar ao usuário `O servidor fahou em responder, tente recarregar a página`
- Caso a API retorne outros erros, apresentar `O servidor não conseguirá responder por agora, tente voltar novamente mais tarde`
- Ao realizar uma chamada, não esperar mais que 5 segundos pelo retorno. Se os dados demorarem mais de 5 segundos para retornar apresentar `O servidor demorou para responder, tente mais tarde`
- Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader
- Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive
- Uma vez que tenha os dados em mãos, veja quais `genre` foram retornados e permita ao usuário selecionar um deles, e então filtre para exibir apenas jogos do gênero selecionado.

##Desenvolvi o projeto com foco na entrega dos requisistos funcionais, todos os requisitos, foram alcançados.

Imagem da página carregando os dados
![image](https://github.com/dev-Raffa/desafio-games-api/assets/113853780/daa5c2e1-f836-4837-bc0a-9da30a016291)


Imagem da página de erro:
![image](https://github.com/dev-Raffa/desafio-games-api/assets/113853780/c8525902-44f9-4aad-bc36-c0fb64c61dbd)

Imagem da página após o carregamento dos dados ser concluído.
![image](https://github.com/dev-Raffa/desafio-games-api/assets/113853780/4e342bfb-33ac-42de-8a72-f9f57b1f99f2)

## Novas features

Os usuários querem marcar quais jogos gostam mais e poder avaliar alguns jogos também.

Pra isso precisamos permitir que o usuário crie uma conta e tenha algumas interações extras, como ver apenas os que gosta e ordenar por avaliação.

## Requisitos

👉 Item que foi atualizado, para ficar mais claro

- Utilizar Firebase para realizar autenticação usando email/senha
- Ter um 🩶 para o usuário favoritar o jogo diretamente na lista, ficando vermelho quando marcado
- Salvar no firebase os jogos favoritos do usuário, no realtime ou firestore
- Ter um botão “Favoritos” que apresenta apenas jogos favoritados, permitindo ainda buscar e filtrar estes jogos. Pode ser na própria lista já apresentada ou em uma separada se preferir.
- Ao lado do coração, ter ★★★★ para o usuário avaliar o jogo, podendo marcar de uma em uma. Ou seja, ele pode escolher 1, 2, 3 ou as 4.
- Ter uma forma de ordenar por avaliação, vendo os melhores (ou piores) primeiro, clicando novamente para inverter a ordem.
- Ao carregar a interface, deixar o ❤️ vermelho para os itens favoritos e as ⭐️ amarelas nos itens avaliados
- Ao acessar sem estar autenticado, os ícones 🩶 e ★ deverão estar visíveis, mas ao clicar irá solicitar a autenticação
- 👉 Ao obter os jogos da API e os dados do firebase, apresentar. Manter o loading para os jogos. Não precisa de loading enquanto espera o firebase, até porque o firebase devolverá os dados mais rapidamente e pode ser complicado “esperar o firebase” se estiver “escutando o firebase”.
- A autenticação deve acontecer na rota `/auth/` do frontend, usando o provedor “E-mail/senha” do firebase, onde o usuário poderá criar uma conta ou acessar a conta já existente (se mantendo apenas nesta rota)
- Escolher um item para aplicar uma animação com CSS, pode ser ao favoritar, ou avaliar, ou quando os itens surgirem
- Publicar seu projeto online para testarmos (na mesma url de antes)