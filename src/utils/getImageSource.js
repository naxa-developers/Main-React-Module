/*
AUTHOR: Binabh
<img> tag src attribute can take file/blob or string as source
CASE:
Editing a form with picture. State can have file object or string
EXAMPLE:

<img src={getImageSource(state.image)}/>
image cam be string like https://example.com/image
or File object that user just uploaded through file input field
other conditions can also be added
*/
export default function getImageSource(object) {
  if (object instanceof File) return URL.createObjectURL(object);
  if (object instanceof String || typeof object === 'string') return object;
  return null;
}
