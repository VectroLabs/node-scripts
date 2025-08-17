function println(x, ...args) {
  process.stdout.write(x + args + "\n");
  return x;
}

function printf(format, ...args) {
  let result = format;
  let argIndex = 0;
  
  // Replace format specifiers with arguments
  result = result.replace(/%[sdifboxX%]/g, (match) => {
    if (match === '%%') return '%';
    if (argIndex >= args.length) return match;
    
    const arg = args[argIndex++];
    
    switch (match) {
      case '%s': return String(arg);
      case '%d':
      case '%i': return parseInt(arg) || 0;
      case '%f': return parseFloat(arg) || 0;
      case '%b': return parseInt(arg).toString(2);
      case '%o': return parseInt(arg).toString(8);
      case '%x': return parseInt(arg).toString(16);
      case '%X': return parseInt(arg).toString(16).toUpperCase();
      default: return match;
    }
  });
  
  process.stdout.write(result);
  return result;
}

global.println = println;

module.exports = {};