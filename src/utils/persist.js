import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function persist(key, whitelist, reducer) {
  return persistReducer(
    {
      key,
      storage,
      whitelist,
    },
    reducer,
  );
}
