const path = require('node:path');
const os = require('node:os');
const child_process = require('node:child_process');

function println(...args) {
  const output = args.join(' ');
  process.stdout.write(output + "\n");
  return args[0];
}

function printf(format, ...args) {
  let result = format;
  let argIndex = 0;
  
  result = result.replace(/%[sdifboxXv%]/g, (match) => {
    if (match === '%%') return '%';
    if (argIndex >= args.length) return match;
    const arg = args[argIndex++];
    
    switch (match) {
      case '%s': return String(arg);
      case '%d': case '%i': return parseInt(arg) || 0;
      case '%f': return parseFloat(arg) || 0;
      case '%b': return parseInt(arg).toString(2);
      case '%o': return parseInt(arg).toString(8);
      case '%x': return parseInt(arg).toString(16);
      case '%X': return parseInt(arg).toString(16).toUpperCase();
      case '%v': 
        return (typeof arg === 'object' && arg !== null) ? JSON.stringify(arg) : String(arg);
      default: return match;
    }
  });
  
  process.stdout.write(result);
  return result;
}

async function input(prompt = '') {
  process.stdout.write(prompt);
  process.stdin.setEncoding('utf8');
  await new Promise(resolve => process.stdin.once('readable', resolve));
  const data = process.stdin.read();
  process.stdin.pause(); 
  return data.trim();
}

function isString(v) {
  if (!v) return false;
  return typeof v === 'string';
}

function isNumber(v) {
  if (!v) return false;
  return typeof v === 'number';
}

function isArray(v) {
  if (!v) return false;
  return Array.isArray(v);
}

function isObject(v) {
  if (!v) return false;
  return typeof v === 'object' && !Array.isArray(v);
}

function isFunction(v) {
  if (!v) return false;
  return typeof v === 'function';
}

function isBoolean(v) {
  if (!v) return false;
  return typeof v === 'boolean';
}

function isNull(v) {
  return v === null;
}

function isUndefined(v) {
  return v === undefined;
}

function isEmpty(v) {
  if (isNull(v) || isUndefined(v)) return true;
  if (isString(v) || isArray(v)) return v.length === 0;
  if (isObject(v)) return Object.keys(v).length === 0;
  return false;
}

function basename(p) {
  return path.basename(p);
}

function dirname(p) {
  return path.dirname(p);
}

function extname(p) {
  return path.extname(p);
}

function hostname() {
  return os.hostname();
}

function homedir() {
  return os.homedir();
}

function platform() {
  return process.platform;
}

function beep() {
    process.stdout.write('\u0007');
}

function die(message) {
  process.stderr.write(message + "\n");
  process.exit(1);
}

function exit(code = 0) {
  process.exit(code);
}

function exec(command) {
  try {
    return child_process.execSync(command, { encoding: 'utf8' }).trim();
  } catch (e) {
    return null;
  }
}

function args() {
  return process.argv.slice(2);
}

function env(key, defaultValue = null) {
    return process.env[key] || defaultValue;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function timestamp() {
  return Math.floor(Date.now() / 1000);
}

function timerStart() {
  return process.hrtime.bigint();
}

function timerEnd(start) {
  const end = process.hrtime.bigint();
  return Number(end - start) / 1_000_000;
}

global.ns = {
    println,
    printf,
    input,
    isString,
    isNumber,
    isArray,
    isObject,
    isFunction,
    isBoolean,
    isNull,
    isUndefined,
    isEmpty,
    basename,
    dirname,
    extname,
    hostname,
    homedir,
    platform,
    beep,
    die,
    exit,
    exec,
    args,
    env,
    sleep,
    timestamp,
    timerStart,
    timerEnd,
};
global.ns = Object.freeze(global.ns);
global.println = global.ns.println;
global.printf = global.ns.printf;


module.exports = {};