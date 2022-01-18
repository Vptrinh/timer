const argv = process.argv.slice(2);

for (let i = 0; i < argv.length; i++) {
  if (argv[i] < 0 || argv[i] === NaN || argv[i] === "" ) {
    continue
  }
  setTimeout(() => {
    process.stdout.write(`${argv[i]} seconds\x07\n`)
  }, argv[i] * 1000)
};
