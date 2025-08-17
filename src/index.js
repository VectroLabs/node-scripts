function println(x, ...args) {
  process.stdout.write(x + args + "\n");
  return x;
}

function printf(x, ...args) {

}

global.println = println;

module.exports = {};