// You're working on developing a new, cutting-edge code editor that aims to make coding fun and intuitive for everyone. One of the critical features of this editor is ensuring that code is syntactically correct, especially when it comes to the use of brackets. Your task is to implement a function that validates the use of parentheses, square brackets, and curly braces in the code. This function will help prevent common coding errors and make the editor more user-friendly.
//
// Story:
// Welcome to CodeCraft, a magical land where code comes to life! As the lead developer in this enchanted realm, you’ve been tasked with creating a powerful spell – the Bracket Validator. This spell ensures that every piece of code written by wizards and witches adheres to the strict syntax rules of the coding language. If the brackets in the spellbooks (code) are not properly matched, the spells might go awry!
//
// Your Mission:
// Create a function called validateBrackets that takes a string code as input and returns True if all the brackets in the code are correctly matched and nested, and False otherwise.
//
// Detailed Instructions:
// Input: A string code which represents the code written by the user. This string contains various characters including (, ), {, }, [, and ].
//
// Output:
// - True, if every opening bracket has a corresponding closing bracket and the brackets are properly nested.
// - False otherwise.
//
// Rules:
//
// Each opening bracket must have a corresponding closing bracket of the same type.
// Brackets must close in the correct order. For instance, "([])" is valid, but "([)]" is not.
// Examples:

// validateBrackets("()") should return True.
// validateBrackets("([{}])") should return True.
// validateBrackets("(]") should return False.
// validateBrackets("([)]") should return False.
// validateBrackets("{[()]}") should return True.

/**
 * @param {string} code
 * @return {boolean}
 */
export function validateBrackets(code) {
  const stack = [];
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of code) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  // return stack.length === 0;
  return true;
}
