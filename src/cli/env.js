const parseEnv = () => {
  const list = [];
  Object.entries(process.env)
    .filter((el) => el[0].startsWith("RSS_"))
    .forEach((el) => list.push(`${el[0]}=${el[1]}`));
  const result = list.join("; ");
  console.log(result);
};

parseEnv();
