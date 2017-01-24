import React,{Component} from 'react';
import {
  View,
  Text,
  Navigator
} from 'react-native';

import signIn from './components/auth/signin';
import signUp from './components/auth/signup';
import chooseNickName from './components/auth/chooseNickName';
import topics from './components/topics';
import topicDetail from './components/topicDetail';
import forgotPassword from './components/auth/forgotPassword';

const routes = {
  signIn,
  signUp,
  chooseNickName,
  topics,
  topicDetail,
  forgotPassword
}


module.exports = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{name: 'signIn'}}
        renderScene={this.renderScene}
      />
    )
  },

  renderScene(route, navigator) {
    let Component = routes[route.name];
    let {displayName, title, author, row_uid} = route;

    return (
      <Component
        navigator={navigator}
        displayName={displayName}
        title={title}
        author={author}
        row_uid={row_uid}
      />
    )
  }
})
