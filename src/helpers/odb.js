const odb = {};

odb.exist = (key) => {
  const k = localStorage.getItem(key);
  if (k === undefined) return false;
  return true;
};

odb.set = (key, val) => {
  let value = JSON.stringify(val);
  localStorage.setItem(key, value);
};

odb.get = (key) => {
  if (!odb.exist(key)) return false;
  const val = localStorage.getItem(key);
  return JSON.parse(val);
};

odb.remove = (key) => {};

odb.clear = () => {
  localStorage.clear();
};

export default odb;
