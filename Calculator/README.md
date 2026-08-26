# Scientific Web Calculator

An interactive scientific calculator built with vanilla JavaScript, HTML5, and custom CSS. This project goes beyond standard basic four-function calculators by implementing advanced scientific operations, trigonometric transformations, and mathematical constants.

---

## 🎯 Features

- **Basic Arithmetic**: Addition (`+`), Subtraction (`−`), Multiplication (`×`), and Division (`÷`).
- **Trigonometric Functions**: Sine (`Sin`), Cosine (`Cos`), Tangent (`Tan`), along with secondary inverse options (`2nd`).
- **Angle Modes**: Toggle between Degree (`DEG`) and Radian (`RAD`) modes for accurate trigonometric calculations.
- **Scientific Operations**:
  - Exponentiation / Power (`^`)
  - Square Root (`√x`)
  - Logarithms (`Log` base 10, `In` natural logarithm)
  - Factorials (`x!`)
  - Rounding helper (`R0`)
  - Fraction conversion display (`FR`)
- **Mathematical Constants**: Pi (`π`) and Euler's Number (`e`).
- **Parentheses Support**: Nested grouping with `(` and `)`.
- **Display & State Management**:
  - Live formula and calculation display
  - Clear (`C`) and Backspace / Delete (`⌫`) controls
  - Decimal point validation preventing duplicate dots
  - Percentage conversions (`%`)

---

## 🛠️ Technology Stack

- **HTML5**: Semantic button grid layout and structured display container.
- **CSS3**: Custom dark-themed tactile button styling, active press feedback, grid-aligned button layout, and custom typography (`Poppins` and `Geist Pixel`).
- **Vanilla JavaScript**: State-machine architecture managing operand buffering, operator precedence, trigonometric conversions (Degrees vs. Radians), and parsing expression stacks.

---

## 🚀 How to Run

1. Open `/Calculator/index.html` directly in any modern web browser, or:
2. From the project root, run `npm start` and navigate to:
   ```
   http://localhost:3000/Calculator/index.html
   ```
   or via the shortcut route:
   ```
   http://localhost:3000/calculator
   ```

---

## 📂 File Structure

- `index.html`: Calculator structure, display screen, and button layout.
- `calculator.css`: Layout grid, responsive styling, button colors, and display typography.
- `calculator.js`: Core computation engine, event listeners, and math parsing functions.

---

## 👨‍💻 Author

**Chukwuebuka Henry**
