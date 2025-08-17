
<div align="center">

# Node Scripts

**A powerful Node.js utility library for scripting and automation**

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-green.svg)](https://nodejs.org/)
[![npm version](https://img.shields.io/badge/npm-1.0.0-red.svg)](https://www.npmjs.com/package/node-scripts)

<br>

*Simplify your Node.js scripting with a comprehensive set of utility functions*

</div>

---

## 📋 Table of Contents

<div align="center">

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [API Reference](#-api-reference) • [Examples](#-examples) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## Features

<div align="center">

| Feature | Description |
|---------|-------------|
| **Output Functions** | Enhanced `println` and `printf` with formatting |
| **Input Handling** | Async input function for user interaction |
| **Type Checking** | Complete set of type validation utilities |
| **Path Operations** | File system path manipulation helpers |
| **System Info** | Comprehensive system information gathering |
| **Timing Utils** | Timer functions for performance measurement |
| **Process Control** | Execute commands and manage process lifecycle |

</div>

## Installation

```bash
npm install node-scripts
```

## Quick Start

```javascript
// Import the library
require('node-scripts');

// Global functions (println and printf)
println("Hello, World!");
printf("User: %s, Age: %d\n", "John", 25);

// All other functions use the ns namespace
if (ns.isString("hello")) {
    println("It's a string!");
}

// System information
const info = ns.systemInfo();
printf("Running on: %s\n", info.os.platform);
```

## API Reference

<div align="center">

### Output Functions

</div>

| Function | Description | Example |
|----------|-------------|---------|
| `println(...args)` | Print with newline | `println("Hello", "World")` |
| `printf(format, ...args)` | Formatted printing | `printf("Hello %s!", "World")` |

<div align="center">

### Type Checking Functions

</div>

| Function | Returns | Example |
|----------|---------|---------|
| `ns.isString(v)` | `boolean` | `ns.isString("hello")` |
| `ns.isNumber(v)` | `boolean` | `ns.isNumber(42)` |
| `ns.isArray(v)` | `boolean` | `ns.isArray([1,2,3])` |
| `ns.isObject(v)` | `boolean` | `ns.isObject({})` |
| `ns.isFunction(v)` | `boolean` | `ns.isFunction(() => {})` |
| `ns.isBoolean(v)` | `boolean` | `ns.isBoolean(true)` |
| `ns.isNull(v)` | `boolean` | `ns.isNull(null)` |
| `ns.isUndefined(v)` | `boolean` | `ns.isUndefined(undefined)` |
| `ns.isEmpty(v)` | `boolean` | `ns.isEmpty("")` |

<div align="center">

### Path & System Functions

</div>

| Function | Description | Example |
|----------|-------------|---------|
| `ns.basename(path)` | Get filename | `ns.basename("/path/file.txt")` |
| `ns.dirname(path)` | Get directory | `ns.dirname("/path/file.txt")` |
| `ns.extname(path)` | Get extension | `ns.extname("file.txt")` |
| `ns.hostname()` | Get hostname | `ns.hostname()` |
| `ns.homedir()` | Get home directory | `ns.homedir()` |
| `ns.platform()` | Get platform | `ns.platform()` |

<div align="center">

### Timing & Process Functions

</div>

| Function | Description | Example |
|----------|-------------|---------|
| `ns.sleep(ms)` | Async sleep | `await ns.sleep(1000)` |
| `ns.timestamp()` | Unix timestamp | `ns.timestamp()` |
| `ns.timerStart()` | Start timer | `const start = ns.timerStart()` |
| `ns.timerEnd(start)` | End timer (ms) | `ns.timerEnd(start)` |
| `ns.exec(command)` | Execute command | `ns.exec("ls -la")` |
| `ns.args()` | Command line args | `ns.args()` |
| `ns.env(key, default)` | Environment variable | `ns.env("NODE_ENV", "dev")` |

## Examples

<div align="center">

### Basic Usage

</div>

```javascript
// Type checking example
const data = "Hello World";
if (ns.isString(data)) {
    println(`Data is a string: ${data}`);
}

// Timer example
const start = ns.timerStart();
await ns.sleep(1000);
const elapsed = ns.timerEnd(start);
printf("Operation took: %.2f ms\n", elapsed);

// System info example
const info = ns.systemInfo();
println(`Platform: ${info.os.platform}`);
println(`CPU Cores: ${info.cpu.cores}`);
println(`Total Memory: ${Math.round(info.memory.total / 1024 / 1024)} MB`);
```

<div align="center">

### Interactive Script

</div>

```javascript
async function interactive() {
    const name = await ns.input("Enter your name: ");
    const age = await ns.input("Enter your age: ");
    
    printf("Hello %s! You are %d years old.\n", name, parseInt(age));
    
    if (ns.isNumber(parseInt(age)) && parseInt(age) >= 18) {
        println("You are an adult!");
    } else {
        println("You are a minor!");
    }
}

interactive();
```

## Contributing

<div align="center">

We welcome contributions! Here's how you can help:

**Report Bugs** • **Suggest Features** • **Improve Documentation** • **Submit Pull Requests**

</div>

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

<div align="center">

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

---

<br>

**Made with ❤️ by [VectroLabs](https://github.com/VectroLabs)**

<br>

*Star this repository if you found it helpful!*

</div>
