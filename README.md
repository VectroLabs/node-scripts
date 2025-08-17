
<div align="center">

# 🚀 Node Scripts

**A powerful Node.js utility library for scripting and automation**

[![Made with Replit](https://replit.com/badge?caption=Made%20with%20Replit&variant=small)](https://replit.com/@your-username/node-scripts)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-green.svg)](https://nodejs.org/)
[![npm version](https://img.shields.io/badge/npm-1.0.0-red.svg)](https://www.npmjs.com/)

<br>

*Simplify your Node.js scripting with a comprehensive set of utility functions*

</div>

---

## 📋 Table of Contents

<div align="center">

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [API Reference](#-api-reference) • [Examples](#-examples) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🖨️ **Output Functions** | Enhanced `println` and `printf` with formatting |
| ⌨️ **Input Handling** | Async input function for user interaction |
| 🔍 **Type Checking** | Complete set of type validation utilities |
| 📁 **Path Operations** | File system path manipulation helpers |
| 💻 **System Info** | Comprehensive system information gathering |
| ⏱️ **Timing Utils** | Timer functions for performance measurement |
| 🔧 **Process Control** | Execute commands and manage process lifecycle |

</div>

## 📦 Installation

```bash
# Clone this repository
git clone https://github.com/VectroLabs/node-scripts.git

# Navigate to project directory
cd node-scripts

# Install dependencies
npm install
```

## 🚀 Quick Start

```javascript
// Import the library
require('./src/index.js');

// Now you have access to global utilities
println("Hello, World!");
printf("User: %s, Age: %d\n", "John", 25);

// Type checking
if (isString("hello")) {
    println("It's a string!");
}

// System information
const info = systemInfo();
printf("Running on: %s\n", info.os.platform);
```

## 📚 API Reference

<div align="center">

### 🖨️ Output Functions

</div>

| Function | Description | Example |
|----------|-------------|---------|
| `println(...args)` | Print with newline | `println("Hello", "World")` |
| `printf(format, ...args)` | Formatted printing | `printf("Hello %s!", "World")` |

<div align="center">

### 🔍 Type Checking Functions

</div>

| Function | Returns | Example |
|----------|---------|---------|
| `isString(v)` | `boolean` | `isString("hello")` |
| `isNumber(v)` | `boolean` | `isNumber(42)` |
| `isArray(v)` | `boolean` | `isArray([1,2,3])` |
| `isObject(v)` | `boolean` | `isObject({})` |
| `isFunction(v)` | `boolean` | `isFunction(() => {})` |
| `isBoolean(v)` | `boolean` | `isBoolean(true)` |
| `isNull(v)` | `boolean` | `isNull(null)` |
| `isUndefined(v)` | `boolean` | `isUndefined(undefined)` |
| `isEmpty(v)` | `boolean` | `isEmpty("")` |

<div align="center">

### 📁 Path & System Functions

</div>

| Function | Description | Example |
|----------|-------------|---------|
| `basename(path)` | Get filename | `basename("/path/file.txt")` |
| `dirname(path)` | Get directory | `dirname("/path/file.txt")` |
| `extname(path)` | Get extension | `extname("file.txt")` |
| `hostname()` | Get hostname | `hostname()` |
| `homedir()` | Get home directory | `homedir()` |
| `platform()` | Get platform | `platform()` |

<div align="center">

### ⏱️ Timing & Process Functions

</div>

| Function | Description | Example |
|----------|-------------|---------|
| `sleep(ms)` | Async sleep | `await sleep(1000)` |
| `timestamp()` | Unix timestamp | `timestamp()` |
| `timerStart()` | Start timer | `const start = timerStart()` |
| `timerEnd(start)` | End timer (ms) | `timerEnd(start)` |
| `exec(command)` | Execute command | `exec("ls -la")` |
| `args()` | Command line args | `args()` |
| `env(key, default)` | Environment variable | `env("NODE_ENV", "dev")` |

## 💡 Examples

<div align="center">

### Basic Usage

</div>

```javascript
// Type checking example
const data = "Hello World";
if (isString(data)) {
    println(`Data is a string: ${data}`);
}

// Timer example
const start = timerStart();
await sleep(1000);
const elapsed = timerEnd(start);
printf("Operation took: %.2f ms\n", elapsed);

// System info example
const info = systemInfo();
println(`Platform: ${info.os.platform}`);
println(`CPU Cores: ${info.cpu.cores}`);
println(`Total Memory: ${Math.round(info.memory.total / 1024 / 1024)} MB`);
```

<div align="center">

### Interactive Script

</div>

```javascript
async function interactive() {
    const name = await input("Enter your name: ");
    const age = await input("Enter your age: ");
    
    printf("Hello %s! You are %d years old.\n", name, parseInt(age));
    
    if (isNumber(parseInt(age)) && parseInt(age) >= 18) {
        println("You are an adult! 🎉");
    } else {
        println("You are a minor! 👶");
    }
}

interactive();
```

## 🏗️ Project Structure

```
node-scripts/
├── src/
│   ├── index.js      # Main library file
│   └── index.mjs     # ES module wrapper
├── package.json      # Project configuration
├── LICENSE           # Apache 2.0 License
└── README.md         # This file
```

## 🤝 Contributing

<div align="center">

We welcome contributions! Here's how you can help:

**🐛 Report Bugs** • **💡 Suggest Features** • **📝 Improve Documentation** • **🔧 Submit Pull Requests**

</div>

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

<div align="center">

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

---

<br>

**Made with ❤️ by [VectroLabs](https://github.com/VectroLabs)**

[![Try with Replit Badge](https://replit.com/badge?caption=Try%20with%20Replit)](https://replit.com/@your-username/node-scripts)

<br>

*⭐ Star this repository if you found it helpful!*

</div>
