const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const powerButton = document.getElementById("powerbtn");
const inverseTrig = document.getElementById("inv");
const decimalPointButton = document.getElementById("decimalPoint");
const parenthesisLeftButton = document.getElementById("parenthesis-left");
const parenthesisRightButton = document.getElementById("parenthesis-right");
const factorial = document.getElementById("factorial");
const percentage = document.getElementById("percentage");
const sqrt = document.getElementById("sqrt");
const numbers = document.querySelectorAll(".digit");
const displayText = document.querySelector(".displayText");
const deleteButton = document.getElementById("delete");
const angleButton = document.getElementById("angleButton");
const sinTrig = document.getElementById("sin");
const cosTrig = document.getElementById("cos");
const tanTrig = document.getElementById("tan");
const piButton = document.getElementById("PI");
const eulerButton = document.getElementById("euler");
const logButton = document.getElementById("log");
const naLogButton = document.getElementById("in");
const rounding = document.getElementById("roundTo");
let expression = "";

const addNumbers = (...values) =>
  values.reduce((total, value) => total + value, 0);

const subtractNumbers = (...values) =>
  values.reduce((total, value) => total - value);

const multiplyNumbers = (...values) =>
  values.reduce((total, value) => total * value, 1);

const divideNumbers = (...values) =>
  values.reduce((total, value) =>
    value === 0 || isNaN(value) || isNaN(total)
      ? "Division by zero"
      : total / value,
  );

const calculateFactorial = (n) => {
  let result;
  if (n < 0) {
    return "Factorial not defined for negs";
  }
  if (!Number.isInteger(n)) {
    return "invalid input";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Trigonometric Functions Section thread carefully young man
let inversemode = false;
let angleMode = "DEG";

function angleModeToggle() {
  if (angleMode === "DEG") {
    angleMode = "RAD";
  } else {
    angleMode = "DEG";
  }
  updateAngleModeUI(angleMode);
}

function updateAngleModeUI(angleMode) {
  angleButton.textContent = angleMode;
}

angleButton.addEventListener("click", () => {
  angleModeToggle();
});

const trigFunctions = {
  sin: {
    normal: Math.sin,
    inverse: Math.asin,
  },
  cos: {
    normal: Math.cos,
    inverse: Math.acos,
  },
  tan: {
    normal: Math.tan,
    inverse: Math.atan,
  },
};

const trigInverseToggle = () => {
  inversemode = !inversemode;
  console.log(inversemode);

  updateTrigUI();
};

function toRadians(value) {
  if (angleMode === "DEG") {
    return (value = (value * Math.PI) / 180);
  }
  return value;
}

function fromRadian(value) {
  if (angleMode === "DEG") {
    return (value = (value * 180) / Math.PI);
  }
  return value;
}
function sine(value) {
  return Math.sin(toRadians(value));
}
function cosine(value) {
  return Math.cos(toRadians(value));
}
function tangent(value) {
  return Math.tan(toRadians(value));
}
function inverseSine(value) {
  return fromRadian(Math.asin(value));
}
function inverseCosine(value) {
  return fromRadian(Math.acos(value));
}
function inverseTangent(value) {
  return fromRadian(Math.atan(value));
}

function updateTrigUI() {
  if (inversemode === true) {
    sinTrig.textContent = "sin⁻¹";
    cosTrig.textContent = "cos⁻¹";
    tanTrig.textContent = "tan⁻¹";
  } else {
    sinTrig.textContent = "sin";
    cosTrig.textContent = "cos";
    tanTrig.textContent = "tan";
  }
}

function handleSine(value) {
  if (inversemode) {
    return inverseSine(value);
  }
  return sine(value);
}
function handleCosine(value) {
  if (inversemode) {
    return inverseCosine(value);
  }
  return cosine(value);
}
function handleTangent(value) {
  if (inversemode) {
    return inverseTangent(value);
  }
  return tangent(value);
}

// Just a random fn for testing code and finding bugs
function bob() {
  console.log(Math.E);
  console.log(Math.PI);
}

inverseTrig.addEventListener("click", () => {
  trigInverseToggle();
});

sinTrig.addEventListener("click", () => {
  if (inversemode === false) {
    displayText.textContent += "sin(";
    expression += "sin(";
  } else {
    displayText.textContent += "sin⁻¹(";
    expression += "sin(";
  }
});
cosTrig.addEventListener("click", () => {
  if (inversemode === false) {
    displayText.textContent += "cos(";
    expression += "cos(";
  } else {
    displayText.textContent += "cos⁻¹(";
    expression += "cos(";
  }
});
tanTrig.addEventListener("click", () => {
  if (inversemode === false) {
    displayText.textContent += "tan(";
    expression += "tan(";
  } else {
    displayText.textContent += "tan⁻¹(";
    expression += "tan(";
  }
});

const calculatePercentage = (n) => {
  if (isNaN(n)) {
    return "Invalid Input";
  }
  return n / 100;
};

const exponentiateNumbers = (base, exponent) =>
  base < 0 || exponent < 0 || isNaN(base) || isNaN(exponent)
    ? "Invalid input"
    : Math.pow(base, exponent);

const round = (value) => {
  const factor = 10 ** 3;
  return Math.round(value * factor) / factor;
};

rounding.addEventListener("click", () => {
  const result = displayText.textContent;
  expression = round(result);
  displayText.textContent = expression;
  console.log(expression);

  console.log(round(expression));

  console.log("btn clicked");
});

numbers.forEach((number) =>
  number.addEventListener("click", () => {
    displayText.textContent += number.textContent.trim();
    expression += number.textContent.trim();
  }),
);

piButton.addEventListener("click", () => {
  displayText.textContent += "π";
  expression += "pi";
});
eulerButton.addEventListener("click", () => {
  displayText.textContent += "e";
  expression += "e";
});

clearButton.addEventListener("click", () => {
  displayText.textContent = "";
  expression = "";
});

deleteButton.addEventListener("click", () => {
  console.log("deleted");
  displayText.textContent = displayText.textContent.slice(0, -1);
  expression = expression.slice(0, -1);
});

const operatorButtons = [
  addButton,
  subtractButton,
  multiplyButton,
  divideButton,
  powerButton,
];

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.dataset.value;
    displayText.textContent += button.textContent.trim();
  });
});

parenthesisRightButton.addEventListener("click", () => {
  expression += ")";
  displayText.textContent += ")";
});

sqrt.addEventListener("click", () => {
  expression += "sqrt(";
  displayText.textContent += "\u221A(";
});

logButton.addEventListener("click", () => {
  expression += "log(";
  displayText.textContent += "log(";
});

naLogButton.addEventListener("click", () => {
  expression += "In(";
  displayText.textContent += "In(";
});

factorial.addEventListener("click", () => {
  expression += "factorial(";
  displayText.textContent += "factorial(";
});

percentage.addEventListener("click", () => {
  expression += "percentage(";
  displayText.textContent += "%(";
});

parenthesisLeftButton.addEventListener("click", () => {
  expression += "(";
  displayText.textContent += "(";
});

const evaluate = (expression) => {
  console.log(expression);

  const cleaned = expression.replace(/\s+/g, "");
  console.log(cleaned);
  const functions = [
    "sqrt",
    "factorial",
    "percentage",
    "sin",
    "cos",
    "tan",
    "log",
    "In",
  ];
  function tokenization(cleaned) {
    const regex =
      /(\d+\.\d*|\.\d+|\d+|sqrt|percentage|factorial|round|sin|cos|tan|log|e|In|pi|[+\-*/^()])/g;
    const tokens = cleaned.match(regex);

    console.log(tokens);

    if (!tokens) {
      throw new Error("Invalid Input");
    }

    // Validate no unknown characters
    const validTokens = tokens.join("");
    if (validTokens.length !== cleaned.length) {
      throw new Error("Invalid character in expression");
    }
    return tokens;
  }

  const cleanedToken = tokenization(cleaned);
  console.log(cleanedToken);

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  function performOperation(operator, valueStack) {
    const right = Number(valueStack.pop());
    const left = Number(valueStack.pop());

    let result;

    switch (operator) {
      case "+":
        result = addNumbers(left, right);
        break;

      case "-":
        result = subtractNumbers(left, right);
        break;

      case "*":
        result = multiplyNumbers(left, right);
        break;

      case "/":
        result = divideNumbers(left, right);
        break;

      case "^":
        result = exponentiateNumbers(left, right);
        break;

      default:
        throw new Error(`Unknown operator: ${operator}`);
    }

    valueStack.push(result);
  }

  const performUnaryOperation = (func, valueStack) => {
    const value = Number(valueStack.pop());
    let result;

    switch (func) {
      case "sqrt":
        result = value < 0 ? "Invalid Input" : Math.sqrt(value);
        break;

      case "factorial":
        result = calculateFactorial(value);
        break;

      case "percentage":
        result = calculatePercentage(value);
        break;

      case "sin":
        result = handleSine(value);
        break;

      case "cos":
        result = handleCosine(value);
        break;

      case "tan":
        result = handleTangent(value);
        break;

      case "log":
        result = Math.log10(value);
        break;
      case "In":
        result = Math.log(value);
        break;

      default:
        throw new Error(`Unknown Function: ${functions}`);
        break;
    }

    valueStack.push(result);
  };

  // Stacks MUST be outside the loop so they remember data
  const values = [];
  const operators = [];

  if (!cleanedToken) {
    return "Invalid Character";
  }

  for (let i = 0; i < cleanedToken.length; i++) {
    const token = cleanedToken[i];

    if (!isNaN(token)) {
      // 1. If it's a number, push to values
      values.push(Number(token));
      console.table(values);
    } else if (token === "pi") {
      values.push(Math.PI);
    } else if (token === "e") {
      values.push(Math.E);
    } else if (functions.includes(token)) {
      operators.push(token);
    } else if (token === "(") {
      // 2. If it's an open parenthesis, push to operators
      operators.push(token);
    } else if (
      operators.length > 0 &&
      functions.includes(operators[operators.length - 1])
    ) {
      performUnaryOperation(operators.pop(), values);
    } else if (token === ")") {
      // 3. If it's a closing parenthesis, calculate everything until we find the "("
      while (operators.length > 0 && operators[operators.length - 1] !== "(") {
        performOperation(operators.pop(), values);
      }
      operators.pop(); // Remove the "(" from the stack
      if (
        operators.length > 0 &&
        functions.includes(operators[operators.length - 1])
      ) {
        performUnaryOperation(operators.pop(), values);
      }
    } else {
      // 4. If it's a normal operator (+, -, *, /)
      while (
        operators.length > 0 &&
        operators[operators.length - 1] !== "(" &&
        precedence[operators[operators.length - 1]] >= precedence[token]
      ) {
        performOperation(operators.pop(), values); // Calculate higher precedence math first
      }
      operators.push(token); // Finally, push the new operator
    }
  }
  while (operators.length > 0) {
    performOperation(operators.pop(), values);
  }
  return values.pop();
};

equalsButton.addEventListener("click", () => {
  const result = evaluate(expression);
  displayText.textContent = result;
  expression = String(result);
});
