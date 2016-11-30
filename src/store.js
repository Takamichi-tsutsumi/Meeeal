import { AsyncStorage } from 'react-native';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate, createTransform } from 'redux-persist';
import { List, Map } from 'immutable';
import _ from 'lodash';
import reducers from './reducers';

const postListTransform = createTransform(
  (inbound, key) => inbound,
  (outbound, key) => {
    return {
      items: List(outbound.items.map(
        (item) => Map(_.extend(item, { date: new Date(item.date) }))
      ))
    };
  },
  { whitelist: ['postList'] }
);

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(autoRehydrate())
  );
  persistStore(store,
    { storage: AsyncStorage, blacklist: ['postFormData'], transforms: [postListTransform] }
    , () => {
    console.log('autoRehydrate completed');
  });

  return store;
}
