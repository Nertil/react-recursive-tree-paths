export function parseInputData(data) {
  let result = [];
  if (!data) return result;
  let arr = [];
  try {
    // TODO
    //  It is dangerous to use eval like this but it is a fast way to convert the input into an array.
    //  Change this parse for production mode.
    arr = eval(data);
  } catch (e) {
    console.log('invalid data');
    return result;
  }
  if (!Array.isArray(arr)) return result;
  let level = { result };

  arr.forEach(row => {
    row.split('/').reduce((r, name, i, a) => {
      if(!name) return r;
      if (!r[name]) {
        r[name] = { result: [] };
        r.result.push({ name, children: r[name].result });
      }

      return r[name];
    }, level);
  });
  return result;
}
