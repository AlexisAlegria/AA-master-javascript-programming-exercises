function getProperty(obj, key) {
  // your code here
  return obj[key];
}
var car = {
  model: 'Toyota',
  value: 5000,
};
var output = getProperty(car, 'value');
  console.log(output);