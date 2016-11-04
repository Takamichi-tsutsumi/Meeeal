import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './reducers';
import Home from './components/Home';
import Post from './components/Post';
import Calendar from './components/Calendar';
import { TabIcon } from './components/common';


let store;

if (__DEV__) {
  store = createStore(reducers, devToolsEnhancer());
} else {
  store = createStore(reducers);
}
const RouterWithRedux = connect()(Router);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="tabbar" tabs={true}>
              <Scene
                key="Home" component={Home} title="Home"
                sceneStyle={{ marginTop: 64 }} icon={TabIcon}
              />
              <Scene
                key="Post" component={Post} title="Post"
                sceneStyle={{ marginTop: 64 }} icon={TabIcon}
              />
              <Scene
                key="Calendar" component={Calendar} title="Calendar"
                sceneStyle={{ marginTop: 64 }} icon={TabIcon}
              />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
