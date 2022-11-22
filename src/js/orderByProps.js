export default function orderByProps(obj, props) {
  const arr = [];
  const arr2 = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (props.indexOf(prop) !== -1) {
        props.find((item, index) => {
          arr[index] = { key: item, value: obj[item] };
          return index;
        });
      } else {
        arr2.push({ key: prop, value: obj[prop] });
      }
      arr2.sort((a, b) => (a.key > b.key ? 1 : -1));
    }
  }
  return arr.concat(arr2);
}
