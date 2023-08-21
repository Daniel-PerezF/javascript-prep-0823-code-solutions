/* exported getValues */
function getValues(object) {
  const values = [];
  for (const x in object) values.push(object[x]);
  return values;
}
