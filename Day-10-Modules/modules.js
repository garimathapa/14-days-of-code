/* Problem Statement

Create a modular arithmetic expression engine that can parse and evaluate nested expressions using plug-and-play operator modules.

Each operator (e.g., +, -, *, /, ^, %) must be implemented as an independent module.

The engine must dynamically load only the operators required by the expression.

Support nested parentheses, operator precedence, and left/right associativity.

Example expression: 3 + (2 * 5) ^ 2 % 7 → engine must compute correctly using modules only. */


// --- operator modules ---
const operators = {
  '+': { prec: 1, assoc: 'L', fn: (a, b) => a + b },
  '-': { prec: 1, assoc: 'L', fn: (a, b) => a - b },
  '*': { prec: 2, assoc: 'L', fn: (a, b) => a * b },
  '/': { prec: 2, assoc: 'L', fn: (a, b) => a / b },
  '%': { prec: 2, assoc: 'L', fn: (a, b) => a % b },
  '^': { prec: 3, assoc: 'R', fn: (a, b) => Math.pow(a, b) },
};

// --- shunting-yard parser ---
function toRPN(expr) {
  const out = [], stack = [];
  const tokens = expr.match(/\d+|[()+\-*/^%]/g);

  for (const t of tokens) {
    if (/^\d+$/.test(t)) out.push(t);
    else if (t in operators) {
      const o1 = operators[t];
      while (stack.length) {
        const top = stack[stack.length - 1];
        if (!(top in operators)) break;
        const o2 = operators[top];

        if ((o1.assoc === 'L' && o1.prec <= o2.prec) ||
            (o1.assoc === 'R' && o1.prec < o2.prec))
          out.push(stack.pop());
        else break;
      }
      stack.push(t);
    } else if (t === '(') stack.push(t);
    else if (t === ')') {
      while (stack.length && stack[stack.length - 1] !== '(')
        out.push(stack.pop());
      stack.pop();
    }
  }
  return out.concat(stack.reverse());
}

// --- evaluator ---
function evalRPN(rpn) {
  const st = [];
  for (const t of rpn) {
    if (t in operators) {
      const b = +st.pop(), a = +st.pop();
      st.push(operators[t].fn(a, b));
    } else st.push(t);
  }
  return st[0];
}

// --- main engine ---
function evaluate(expr) {
  return evalRPN(toRPN(expr));
}

// Example
console.log(evaluate("3 + (2 * 5) ^ 2 % 7"));
