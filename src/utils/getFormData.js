/* eslint-disable no-unused-expressions */
/*
AUTHOR: Binabh
get form data for all fields of the object.
using this we can directly use
state reducer data as payload and this util transforms it into form data
EXAMPLE:

export const postMyData = payload =>
  authenticated(api).post('/my_data/', getFormData(payload), {
    headers,
  });


*/
export const headers = {
  'Content-Type': 'multipart/form-data',
};

export default function getFormData(payload) {
  const formdata = new FormData();
  Object.keys(payload).forEach((key) => {
    if (payload[key] !== null) {
      if (typeof payload[key] === 'object') {
        payload[key] instanceof File
          ? formdata.append(key, payload[key])
          : formdata.append(key, JSON.stringify(payload[key]));
      } else {
        formdata.append(key, payload[key]);
      }
    }
  });
  return formdata;
}
