import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import configureStore from './store';
import Home from './components/Home';
import ImagePicker from './components/Post/ImagePicker';
import PostForm from './components/Post/PostForm';
import Calendar from './components/Calendar';
import { TabIcon } from './components/common';
import { colors } from './Constants';


const store = configureStore();
const RouterWithRedux = connect()(Router);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene
              key="tabbar" tabs={true}
              tabBarStyle={{ backgroundColor: colors.tabbar }}
            >
              <Scene
                key="Home" component={Home} title="meeeal"
                menuText="Home"
                sceneStyle={{ marginTop: 64 }} icon={TabIcon}
                initial={true}
                onLeft={() => { Actions.Post(); }} leftTitle="+post"
                navigationBarStyle={styles.homeNavbar}
              />
              <Scene
                key="Calendar" component={Calendar} title="Calendar"
                menuText="Calendar"
                sceneStyle={{ marginTop: 64 }} icon={TabIcon}
              />
            </Scene>
            <Scene key="Post" direction="vertical">
              <Scene
                key="imagePicker" component={ImagePicker}
                schema="modal" sceneStyle={{ marginTop: 68 }}
                onLeft={Actions.pop} leftTitle={'\u2718'} // TODO left icon
              />
              <Scene
                key="postForm" component={PostForm}
                sceneStyle={{ marginTop: 64 }}
              />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  homeNavbar: {
    backgroundColor: colors.home_background,
    borderBottomWidth: 0
  }
});

export default App;
