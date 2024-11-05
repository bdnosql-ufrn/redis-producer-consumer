
# Redis Producer-Consumer

Este projeto é uma aplicação Node.js que implementa um sistema de **Produtor-Consumidor** usando o Redis para comunicação entre processos. Ele demonstra a integração entre um produtor que envia mensagens para uma fila e um consumidor que processa essas mensagens.

## Estrutura do Projeto

- `producer.js`: Código que produz e envia mensagens para a fila no Redis.
- `consumer.js`: Código que consome e processa as mensagens da fila.
- `package.json`: Contém as dependências e scripts do projeto.
- `.gitignore`: Arquivo de configuração do Git para ignorar arquivos desnecessários.
  
## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. [Download Node.js](https://nodejs.org/)
- **Redis**: O projeto depende de uma instância do Redis em execução. Você pode instalar o Redis localmente ou utilizar uma instância hospedada.

## Configuração

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd redis-producer-consumer
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o Redis. Se necessário, atualize as configurações de conexão para o Redis no código do `producer.js` e `consumer.js`.

## Executando o Projeto

### Executar o Produtor

Para iniciar o produtor e enviar mensagens para a fila, execute:

```bash
node producer.js
```

### Executar o Consumidor

Para iniciar o consumidor e processar as mensagens da fila, execute:

```bash
node consumer.js
```

## Dependências

- **redis**: Biblioteca para interação com o Redis.
- Outras dependências podem ser encontradas no arquivo `package.json`.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.
