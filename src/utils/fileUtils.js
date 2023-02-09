/**
 *
 * An async function to convert file object to base64 format.
 *
 * @param {object} file - file object
 * @returns a promise, when resolved, gives base64 string.
 */
export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/**
 *
 * A function to get extension from filename.
 *
 * @param {string} filename
 * @returns extension of the file
 */
export function getFileExtension(filename) {
  const arr = filename.split('.');
  return arr[arr.length - 1];
}
