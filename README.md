### Quick start

1.  Clone repo using `git clone https://github.com/naxa-developers/<Your Project>`
2.  Run `npm i` in order to install dependencies.<br />
3.  Now you can run `npm start` to see the example app at `http://localhost:8080`
4.  Copy .env.sample and paste in the root directory and rename it to .env.

### Features/Library You need to know

- React
- Openlayers
- Connected React Router
- Redux
- Redux Persist
- Redux Sauce
- Redux Saga
- Immer
- Date-fns
- React-slick
- Typescript
- Eslint
- Prettier

### Custom Component

```
  - Table Component (Used for Working on Table Easily,Dynamically).


```

### Custom Hooks

```
  - usePagination (Used for Working on Pagination Easily without Writing all the Logic
                  repetitively).


```

### Useful Util Functions

```
- sortByKey - (Used for sorting any array of object with a key given to it and
              the key can be made dynamic as well).
              
- isEmpty(obj) - Check if an object or an array is empty.
  
- toCamelCase(word) - Convert string to camel case
  
- snakeCaseToCamel(str) - Convert snakecase string to camelcase
  
- convertToBase64(file) - An async function to convert file object to base64 format
  
- getFileExtension(filename) - A function to get extension from filename.
  
-	getFormData(payload) - get form data for all fields of the object.
  
- getImageSource(object) - <img> tag src attribute can take file/blob or string as source
  
- jsonDiff(masterData, data) - PATCH requests do not need all the data but only changed data 
this util diffs and gives only changed data

- hasKey(obj, key) - Check if an object has a specific key.

- keepObjectKeys(data, keyArr) - A function to keep only the given keys of an object

- removeObjectKeys(data, keyArr) - A function to remove specific keys of an object

- sortByKey(array, key, type) - sort an array of object with key as ascending descending.
```

### Folder Structure

```
  -- src/
    -- actions/             -->  for redux actions
    -- assets/              -->  for static assets and styles
    -- components/          -->  for components
        -- common/          -->  for shared components
    -- hooks/               -->  for custom hooks
    -- reducers/            -->  for redux reducers
    -- routes/              -->  for all routes
    -- sagas/               -->  for redux sagas
    -- selectors/           -->  for getting derived state from store
    -- services/            -->  for api requests
    -- utils/               -->  for utility / helper functions
    -- views/               -->  for page specific components / container components

```

### [Help]

> If you are having problem using any of those mentioned features (utils, hooks, components) feel free to tell anyone in the frontend channel.
