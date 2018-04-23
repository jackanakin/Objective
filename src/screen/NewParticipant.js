import React, { Component } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { newParticipant } from './action/ParticipantAction';
import { strings } from '../../locales/_i18n';
import { deviceWidth, uiTheme } from '../style/theme'

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
      participantEmail: null,
      mission_uid: null
    }
  }

  _newParticipant = async () => {
    await this.props.newParticipant(this.state.participantEmail, this.props.missionUID);
    console.warn("terminoua");
  }

  render() {
    const { requestNewParticipant, validationNewParticipant } = this.props;
    const validationArray = validationNewParticipant.response;

    const emailVE = !validationNewParticipant.empty && validationArray.email;

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
            <MyTextInput vm={emailVE ? strings(validationArray.email) : null}
              placeholder={strings('newParticipant.participantEmail')} onChangeText={text => this.setState(prevState => ({
                participantEmail: text
              }))} />

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
            <MyTextError text="Teste aaaaaaaaaaaaaaa" />
            <MyTextError text="Teste aaaaaaaaaaaaaaa" />
            <MyTextError text="Teste aaaaaaaaaaaaaaa" />
            <MyTextError text="Teste aaaaaaaaaaaaaaa" />
            <MyTextError text="Teste aaaaaaaaaaaaaaa" />
            <MyTextError text="Teste aaaaaaaaaaaaaaa" />
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
    validationNewParticipant: state.MissionReducer.validationNewParticipant
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