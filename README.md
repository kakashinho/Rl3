# Rl3
# 🏢 Projeto Cadastro de Clientes e Empresas com Encapsulamento em JavaScript 🚀

---

## 📖 Descrição

Este projeto exemplifica a construção de objetos em JavaScript usando conceitos modernos de **POO**:

- **Classes**
- **Encapsulamento** (atributos privados com `#`)
- Métodos **getters**

A aplicação cria um sistema simples para cadastro de **clientes**, **empresas**, **telefones** e **endereços**, protegendo dados sensíveis como **CPF** e **CNPJ** com encapsulamento.

---

## 🛠️ Tecnologias utilizadas

- JavaScript (ES6+)
- Programação Orientada a Objetos (POO)
- Encapsulamento com atributos privados

---

## 🏗️ Estrutura do código

### 📌 Classes principais

- **Cliente**  
  - `nome` (público), `#cpf` (privado), `endereco` (objeto Endereco), `telefones` (Set de Telefone)  
  - CPF é imutável após criação  
  - Métodos getters para nome e CPF em **maiúsculas** e **minúsculas**

- **Telefone**  
  - `ddd` e `numero` públicos  
  - Utilizado para armazenar telefones de clientes e empresa

- **Endereco**  
  - `estado`, `cidade`, `rua`, `numero` públicos  
  - Representa endereço

- **Empresa**  
  - `razaoSocial`, `nomeFantasia` (públicos), `#cnpj` (privado), `endereco`, `telefones` (Set), `clientes` (Set)  
  - CNPJ privado e imutável  
  - Métodos getters para acesso formatado  
  - Método `descricao()` gera relatório completo da empresa e clientes

---

## ⚙️ Como funciona

- **Encapsulamento** protege dados sensíveis (`#cpf`, `#cnpj`)  
- Telefones e clientes são armazenados em **Set** para evitar duplicatas  
- Métodos getters retornam informações em caixa alta e baixa  
- O método `descricao()` gera um resumo detalhado da empresa e seus clientes

---

## ▶️ Como executar

Siga os passos abaixo para testar o projeto:

1. 📋 **Copie o código** para um arquivo com extensão `.js`  
   - Exemplo: `index.js`

2. 🧠 **Escolha um ambiente para rodar o script**:
   - 💻 **Node.js** (recomendado)
     - Execute no terminal com:
       ```bash
       node index.js
       ```
   - 🌐 **Navegador**
     - Copie o código e cole no console das ferramentas de desenvolvedor (DevTools)

3. 📄 **Verifique a saída**
   - A descrição da empresa e dos clientes será exibida no console:
     ```
     Razão Social: ROMAGNOLE LTDA
     Nome fantasia: ROMAGNOLE
     -----------------
     Nome: ANTÔNIO MENDES
     ...
     ```

✅ Pronto! Você agora visualiza os dados organizados e encapsulados diretamente no console.
