import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import reducers from './reducers';
import Home from './components/Home';
import Post from './components/Post';
import Calendar from './components/Calendar';

const RouterWithRedux = connect()(Router);
const store = createStore(reducers);

class TabIcon extends Component {
  render() {
    return (
      <Text style={{color: this.props.selected ? "red" : "black"}}>
        {this.props.title}
      </Text>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="tabbar" tabs={true}>
              <Scene key="Home" component={Home} title="Home" sceneStyle={{ marginTop: 64 }} icon={TabIcon}/>
              <Scene key="Post" component={Post} title="Post" sceneStyle={{ marginTop: 64 }} icon={TabIcon}/>
              <Scene key="Calendar" component={Calendar} title="Calendar" sceneStyle={{ marginTop: 64 }} icon={TabIcon}/>
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
