# 🧮 Calculadora de IMC

Este é um projeto simples de uma **Calculadora de IMC** (Índice de Massa Corporal) desenvolvido em HTML, CSS (usando Bootstrap) e JavaScript. A calculadora permite que os usuários insiram sua altura e peso, e com base nesses valores, calcula e exibe o IMC, juntamente com uma mensagem classificando o resultado.

## 🚀 Funcionalidades

- 🏃 **Entrada de altura e peso**: O usuário pode inserir sua altura (em centímetros) e peso (em quilos).
- 📊 **Cálculo do IMC**: O IMC é calculado com base na fórmula padrão:
  
  \[
  IMC = \frac{\text{peso (kg)}}{(\text{altura (m)})^2}
  \]

- ✅ **Classificação do IMC**: O resultado do IMC é classificado nas seguintes categorias:
  - 🟡 Abaixo do peso
  - 🟢 Peso normal
  - 🟠 Sobrepeso
  - 🔴 Obesidade grau 1
  - ⚫ Obesidade grau 2

- 📱 **Design responsivo**: O layout é desenvolvido com o framework **Bootstrap** para garantir que funcione bem em diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura básica da aplicação.
- **CSS (Bootstrap 5.3.3)**: Utilizado para estilização rápida e responsiva.
- **JavaScript (ES6)**: Lógica para cálculo do IMC, manipulação do DOM, e exibição dos resultados.

## 📝 Como Usar

1. Clone ou faça o download deste repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Insira sua **altura** (em centímetros) e **peso** (em quilos) nos campos apropriados.
4. Clique no botão **Calcular**.
5. O IMC calculado e a classificação correspondente serão exibidos na tela.

## 💡 Exemplo de Uso

- **Altura**: 170 cm
- **Peso**: 70 kg

Resultado:

 `O Seu resultado foi 24.22, Seu peso está normal`

 
## 📂 Estrutura do Projeto

```bash
.
├── index.html          # Arquivo principal do projeto
├── main.js             # Script JavaScript para cálculo do IMC
├── README.md           # Explicação do projeto
└── css/                # Diretório de estilos (opcional)

```
*** 🔍 Explicação do Código

O cálculo do IMC é feito através de uma função arrow em JavaScript:

```javaScript
let imc = ([...args]) => (args[1] / Math.pow(args[0], 2)).toFixed(2);
```

Aqui, usamos o operador spread para passar a altura e o peso como argumentos em um array, e depois calculamos o IMC com base nesses valores.

A classificação do IMC é feita usando um bloco if-else simplificado com operadores ternários:

```javaScript
let tabela = resultadoIMC < 18.5 ? "Você está abaixo do peso" :
             resultadoIMC >= 18.5 && resultadoIMC < 25.0 ? "Seu peso está normal" :
             resultadoIMC >= 25.01 && resultadoIMC < 30.0 ? "Você está com sobrepeso" :
             resultadoIMC >= 30 && resultadoIMC < 35 ? "Você está com obesidade grau 1" :
             "Você está com obesidade grau 2";

```

** 🔧 Melhoria Futura
🛡️ **Validação de entrada:** Adicionar verificações para garantir que a altura e o peso inseridos sejam números válidos.

🎨 **Melhorias na UI**: Adicionar estilos customizados além do Bootstrap para melhorar a aparência.

💾 **LocalStorage:** Armazenar os resultados anteriores para que o usuário possa acompanhar sua evolução.
