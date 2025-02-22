# Demonstração de React Error Boundaries e Portal

## Sobre o Projeto
Este projeto demonstra a implementação de Error Boundaries e Portals em React, utilizando TypeScript. Ele mostra como lidar com erros de forma elegante e renderizar componentes em diferentes nós do DOM.

## Funcionalidades
- Implementação de Error Boundary para tratamento elegante de erros
- Uso de Portal para renderização de componentes fora da hierarquia principal do DOM
- Integração com TypeScript para segurança de tipos
- Animações CSS para mensagens de erro

## Stack Técnica
- React 19
- TypeScript
- Vite
- ESLint
- CSS Modules

## Estrutura do Projeto
```
src/
    ├── Components/
    │   └── Error.tsx       # Componente Error Boundary
    ├── App.tsx            # Componente principal da aplicação
    ├── App.css            # Estilos
    └── main.tsx          # Ponto de entrada da aplicação
```

## Configuração e Instalação
1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

## Como Funciona
- O Error Boundary captura erros de JavaScript em qualquer parte da árvore de componentes
- Quando ocorre um erro, ele exibe uma mensagem de erro através de um Portal
- A mensagem de erro aparece em um nó DOM separado (#error) para melhor organização da UI

## Contribuindo
Sinta-se à vontade para enviar issues e pull requests.

## Licença
Licença MIT
