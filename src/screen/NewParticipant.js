import React, { Component } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Text, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { newParticipant } from './action/ParticipantAction';
import { strings } from '../../locales/_i18n';
import { deviceWidth, uiTheme, errorTextColor } from '../style/theme'

import MyTextInput from '../component/MyTextInput'
import MyButton from '../component/MyButton'
import MyTextTitle from '../component/MyTextTitle'
import MyForm from '../component/MyForm'
import MyTextError from '../component/MyTextError'
import MyPasswordInput from '../component/MyPasswordInput'
import MyProgress from '../component/MyProgress'
import MyBackground from '../component/MyBackground';

class NewParticipant extends Component {
  constructor() {
    super();
    this.state = {
      participantEmail: null
    }
    this._newParticipant.bind(this);
    this.emailInput = React.createRef();
  }

  _newParticipant = () => {
    this.props.newParticipant(function () {
      this.inputEmail.clear();
    }.bind(this), this.state.participantEmail, this.props.missionUID);
  }

  /*
  handleMonthChange_next = () => {
    this.setState({
        currentMonth: +this.state.currentMonth + 1
    }, () => {
     this.props.getCalendarData(this.state.currentMonth)
    })
}
*/

  render() {
    const { requestNewParticipant, validationNewParticipant, participantList } = this.props;
    const validationArray = validationNewParticipant.response;
    const emailVE = !validationNewParticipant.empty && validationArray.email;
    const validationStyle = emailVE ? uiTheme.inputTextValidation : null;

    return (
      <MyBackground>
        <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <MyForm>
            <MyProgress animating={requestNewParticipant.inProgress} />
            <View>
              <TextInput style={[uiTheme.inputText, validationStyle]}
                placeholderTextColor={[uiTheme.placeholderTextColor]}
                underlineColorAndroid="transparent" autoCapitalize="none" placeholder={strings('newParticipant.participantEmail')}
                onChangeText={text => this.setState(prevState => ({
                  participantEmail: text
                }))} ref={input => this.inputEmail = input} />
              {emailVE ?
                <Text style={{ color: errorTextColor }}>{strings(validationArray.email)}</Text> : null
              }
            </View>

            {
              requestNewParticipant.message ?
                <MyTextError text={requestNewParticipant.message} />
                : null
            }

            <View style={[uiTheme.button.container, { width: deviceWidth * 0.8 }]}>
              <Icon.Button name="person-add" backgroundColor={uiTheme.palette.secondaryColor}
                onPress={this._newParticipant} style={iconStyle.container}>
                <Text style={{ fontFamily: uiTheme.fontFamily, color: uiTheme.palette.secondaryTextColor, fontWeight: 'bold' }}>
                  {strings('newParticipant.addParticipant').toUpperCase()}
                </Text>
              </Icon.Button>
            </View>
          </MyForm>
          <View>
            {participantList ?
              participantList.map((item, index) => {
                return (
                  <Text key={index}>{item}{strings('newParticipant.addedParticipant')}</Text>
                )
              })
              : null}
          </View>
          <View />
        </ScrollView>
      </MyBackground>
    );
  }
}

const mapStateToProps = state => {
  return ({
    requestNewParticipant: state.MissionReducer.requestNewParticipant,
    validationNewParticipant: state.MissionReducer.validationNewParticipant,
    participantList: state.MissionReducer.participantList
  });
}

export default connect(mapStateToProps, {
  newParticipant
})(NewParticipant);

const iconStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});