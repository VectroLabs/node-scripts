
'use strict';

// Cache for better performance
const formatSpecifiers = /(%%)|(%)([sdifboxXv])/g;
const numberCache = new Map();

function println(x, ...args) {
  // More efficient string concatenation
  const output = args.length > 0 ? `${x}${args.join('')}` : String(x);
  process.stdout.write(output + '\n');
  return x;
}

function printf(format, ...args) {
  if (typeof format !== 'string') {
    format = String(format);
  }
  
  let argIndex = 0;
  
  // Optimized regex replacement with better error handling
  const result = format.replace(formatSpecifiers, (match, escaped, percent, specifier) => {
    // Handle escaped %% first
    if (escaped) return '%';
    
    // Check if we have arguments left
    if (argIndex >= args.length) return match;
    
    const arg = args[argIndex++];
    
    // Optimized type conversion with caching for numbers
    switch (specifier) {
      case 's': 
        return String(arg);
      
      case 'd':
      case 'i': {
        const num = Number(arg);
        return Number.isNaN(num) ? '0' : Math.trunc(num).toString();
      }
      
      case 'f': {
        const num = Number(arg);
        return Number.isNaN(num) ? '0' : num.toString();
      }
      
      case 'b': {
        const num = Number(arg);
        return Number.isNaN(num) ? '0' : Math.trunc(num).toString(2);
      }
      
      case 'o': {
        const num = Number(arg);
        return Number.isNaN(num) ? '0' : Math.trunc(num).toString(8);
      }
      
      case 'x': {
        const num = Number(arg);
        return Number.isNaN(num) ? '0' : Math.trunc(num).toString(16);
      }
      
      case 'X': {
        const num = Number(arg);
        return Number.isNaN(num) ? '0' : Math.trunc(num).toString(16).toUpperCase();
      }
      
      case 'v': {
        if (arg === null) return 'null';
        if (arg === undefined) return 'undefined';
        if (typeof arg === 'object') {
          try {
            return JSON.stringify(arg);
          } catch (e) {
            return '[Circular]';
          }
        }
        return String(arg);
      }
      
      default: 
        return match;
    }
  });
  
  process.stdout.write(result);
  return result;
}

// Add input validation helpers
function validateArgs(fn, args) {
  if (args.length === 0) {
    throw new Error(`${fn.name} requires at least one argument`);
  }
}

// Enhanced versions with validation
function safePrintln(x, ...args) {
  if (arguments.length === 0) {
    process.stdout.write('\n');
    return undefined;
  }
  return println(x, ...args);
}

function safePrintf(format, ...args) {
  if (arguments.length === 0) {
    return '';
  }
  return printf(format, ...args);
}

// Export both safe and original versions
global.println = safePrintln;
global.printf = safePrintf;

// Also export unsafe versions for performance-critical code
global.unsafePrintln = println;
global.unsafePrintf = printf;

module.exports = {
  println: safePrintln,
  printf: safePrintf,
  unsafePrintln: println,
  unsafePrintf: printf
};
