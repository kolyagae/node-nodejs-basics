const parseArgs = () => {
  const data = process.argv.slice(2);
  const list = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("--")) {
      list.push(data[i].replace(/--/g, "") + " is " + data[i + 1]);
    }
  }
  console.log(list.join(", "));
};

parseArgs();
