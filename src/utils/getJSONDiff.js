/* eslint-disable import/prefer-default-export */
/*
AUTHOR: Binabh
PATCH requests do not need all the data but only changed data 
this util diffs and gives only changed data
For this we need to keep data we get for patch in two states
state = {
  masterData: {},
  data: {}
}
EXAMPLE
handleFormSubmit(){
  payload = jsonDiff(masterData, data);
  dispatch(patchDataRequest(payload, path));
}

*/
export const jsonDiff = (obj1, obj2) => {
  const result = {};
  Object.keys(obj1).map((key) => {
    if (obj2[key] !== obj1[key]) {
      result[key] = obj2[key];
    }
    return null;
  });
  return result;
};
