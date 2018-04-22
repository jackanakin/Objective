import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Toolbar, BottomNavigation } from 'react-native-material-ui';

import { uiTheme } from '../style/theme';


class Mission extends Component {
  constructor() {
    super();
  }

  render() {
    const { mission } = this.props;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Text >
          Welcome to React Native!
        </Text>
        <Text >
          To get started, edit App.js
        </Text>
        <Text>
          {mission.title}
        </Text>
        <View>
          <BottomNavigation style={{ container: { backgroundColor: uiTheme.palette.secondaryColor } }} >
            <BottomNavigation.Action
              key="new_objective"
              icon="flag"
              onPress={() => false}
            />
            <BottomNavigation.Action
              key="add_participant"
              icon="group-add"
              onPress={() => Actions.newParticipant({ missionUID: this.props.mission.uid })}
            />
            <BottomNavigation.Action
              key="finish"
              icon="beenhere"
              onPress={() => false}
            />
            <BottomNavigation.Action
              key="edit"
              icon="edit"
              onPress={() => false}
            />
          </BottomNavigation>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return ({
    mission: state.MissionReducer.mission
    /*request: state.MissionReducer.request,
    validation: state.MissionReducer.validation*/
  });
}

export default connect(mapStateToProps, {
})(Mission);