# Programa de Fidelidade

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/HenriqueMarcelo/fidelidade.git
   cd fidelidade
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o Json Server (mantenha este terminal aberto):
   ```bash
   npm run dev-server
   ```
4. Inicie a aplicação (abra em outro terminal e mantenha aberto):
   ```bash
   npm run server
   ```

A aplicação, por padrão, estará disponível em http://localhost:5173.
Caso essa URL não funcione, verifique no último terminal aberto se o Vite utilizou outra URL.

## Decisões técnicas do projeto

**Design**: Construi a aplicação com um design visualmente agradável, mas sem comprometer o tempo de implementação. Optei por um estilo monocromático, que proporciona uma boa experiência do usuário (UX).

**Backend**: Para simular um cenário mais próximo da realidade, utilizei a biblioteca [Json Server] para criar um backend fictício com um pequeno atraso nas requisições. Dessa forma, as ações de obter prêmios, criar transações e manipular os pontos do usuário são feitas através de requisições HTTP. Para facilitar essas requisições, utilizei a biblioteca [Axios]. O atraso foi adicionado para demonstrar o funcionamento de um indicador de carregamento no topo da tela e o bloqueio do formulário.

**Telas:** Decidi criar uma página separada para exibição do histórico de transações, permitindo o uso da biblioteca [React Router] para navegação sem recarregar a página. Já a listagem do carrinho e o botão de checkout foram colocados em um menu lateral para diversificar a interface.

**Estados Globais:** Para o gerenciamento de estados globais, utilizei a [Context API] do React. Ela foi aplicada para gerenciar os estados de Produtos, Histórico, Loader, Carrinho de Compras e Saldo de Pontos. O componente do cabeçalho é um bom exemplo de sua utilização.

**Hooks Personalizados**: Com o objetivo de separar a lógica dos componentes visuais, criei dois hooks personalizados para gerenciar as requisições do checkout e do histórico.

**Estilização**: Conforme solicitado, os estilos foram implementados utilizando [SCSS]. Cada componente tem seu próprio arquivo de estilo, carregado de forma modular. Apenas o arquivo _index.scss_ não foi carregado modularmente. Para padronização do código, utilizei a metodologia [BEM].

**Testes**: Alguns testes foram criados, mas infelizmente não consegui cobrir todas as áreas que gostaria. Execute o comando `npm run test` para rodá-los.

## Tecnologias Utilizadas

- [React] com [TypeScript]: Framework utilizado para a construção da interface, com TypeScript para adicionar tipagem;
- [Vite]: Ferramenta para inicialização de projetos front-end;
- [Json Server]: Biblioteca utilizada para simular um backend com uma API REST simples;
- [React Icons]: Biblioteca de ícones;
- [React Router]: Biblioteca utilizada para navegação sem recarregar a página (SPA).
- [Axios]: Biblioteca utilizada para realizar requisições HTTP para a API.
- [Testing Library] e [Vitest]: Ferramentas utilizadas para realizar testes da aplicação.
- [SASS/SCSS]: Pré-processador de CSS.

## Melhorias

Infelizmente, não tive tempo para implementar todas as funcionalidades desejadas no projeto, por isso foquei nas principais demandas solicitadas. No entanto, gostaria de mencionar algumas áreas que **sei** que podem ser melhoradas:

- Salvar e ler as informações dos pontos e do histórico separadamente para cada usuário.
- Substituir o feedback que atualmente é exibido com a função `alert()` por um modal mais estilizado.
- Tratar erros que possam surgir nas requisições para a API.
- Implementar mais testes cobrindo toda a aplicação.
- Adicionar transições mais suaves entre as telas e componentes.
- Igualar a altura do input de quantidade de produto com o botão de adicionar ao carrinho.

###

[React]: https://react.dev/
[TypeScript]: https://react.dev/learn/typescript
[Vite]: https://vitejs.dev/
[Json Server]: https://www.npmjs.com/package/json-server
[React Icons]: https://react-icons.github.io/react-icons/
[React Router]: https://reactrouter.com/en/main
[Axios]: https://axios-http.com/
[Testing Library]: https://testing-library.com/
[Vitest]: https://vitest.dev/
[SASS/SCSS]: https://sass-lang.com/
[SCSS]: https://sass-lang.com/
[Context API]: https://react.dev/reference/react/createContext
[BEM]: https://getbem.com/
