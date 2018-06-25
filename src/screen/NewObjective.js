import React, { Component } from 'react';
import MyBackground from '../component/MyBackground';
import MyTextTitle from '../component/MyTextTitle';
import { ScrollView } from 'react-native';
import MyForm from '../component/MyForm';
import { strings } from '../../locales/_i18n';
import { newObjective } from './action/MissionAction';
import { connect } from 'react-redux';
import MyTextInput from '../component/MyTextInput';
import MyLargeIconButton from '../component/MyLargeIconButton';
import { uiTheme, deviceWidth, errorTextColor } from '../style/theme';
import Objective from '../entity/Objective';
import MyView from '../component/MyView';
import MyProgress from '../component/MyProgress';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import b64 from 'base-64';
import _ from 'lodash';

import {
  View,
  Alert,
  StyleSheet,
  Text, TextInput
} from 'react-native';

class NewObjective extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      description: null,
      objective: new Objective({ title: "", description: "", status: "A", responsible: null })
    }
  }


  _newObjective = () => {
    this.props.newObjective(this.state.objective, this.props.missionUID);
  }

  renderParticipant = (participant) => {
    return (
      <TouchableHighlight onPress={() => false} >
        <View style={{ flex: 1, padding: 25, borderBottomWidth: 1, borderColor: "#CCC" }}>
          <Text style={{ fontSize: 18 }}>{b64.decode(participant.account)}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { requestNewObjective, validationNewObjective } = this.props;
    const validationArray = validationNewObjective.response;
    const titleVE = !validationNewObjective.empty && validationArray.title;
    const responsibleVE = !validationNewObjective.empty && validationArray.responsible;

    let list = [];
    if (!_.isEmpty(this.props.participantList)) {
      _.forEach(this.props.participantList, (val, key) => {
        list.push(b64.decode(val.account))
      });
    }

    return (
      <MyBackground>
        <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <MyForm>
            <MyProgress animating={requestNewObjective.inProgress} />
            <MyTextInput vm={titleVE ? strings(validationArray.title) : null}
              placeholder={strings('newObjective.title')} onChangeText={text => this.setState(prevState => ({
                objective: {
                  ...prevState.objective,
                  title: text
                }
              }))} />
            <ModalDropdown options={list} onSelect={(idx, value) => this.setState(prevState => ({
              objective: {
                ...prevState.objective,
                responsible: value
              }
            }))} dropdownStyle={{ width: deviceWidth * 0.8 }}>
              <View style={{ marginTop: 30, width: deviceWidth * 0.8, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="user" size={25}>
                  <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: uiTheme.fontFamily, color: uiTheme.palette.secondaryColor, fontWeight: 'bold' }}>
                    {!this.state.objective.responsible ? strings('newObjective.selectResponsible').toUpperCase() : this.state.objective.responsible}
                  </Text>
                </Icon>
              </View>
              {responsibleVE ?
                <Text style={{ color: errorTextColor }}>{strings(validationArray.responsible)}</Text> : null
              }
            </ModalDropdown>
            <MyLargeIconButton icon="plus-circle" backgroundColor={uiTheme.palette.secondaryColor}
              text={strings('newObjective.add')} onPress={this._newObjective} />
          </MyForm>
        </ScrollView>
      </MyBackground>
    )
  }
}

const mapStateToProps = state => {
  return ({
    requestNewObjective: state.MissionReducer.requestNewObjective,
    validationNewObjective: state.MissionReducer.validationNewObjective,
    participantList: state.MissionReducer.participantSource
  });
}

export default connect(mapStateToProps, {
  newObjective
})(NewObjective);