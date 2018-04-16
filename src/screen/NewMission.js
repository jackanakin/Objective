import React, { Component } from 'react';
import {
  View,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { newMission } from './action/MissionAction';
import { strings } from '../../locales/_i18n';
import { uiTheme } from '../style/theme';

import MyTextInput from '../component/MyTextInput'
import MyButton from '../component/MyButton'
import MyTextTitle from '../component/MyTextTitle'
import MyForm from '../component/MyForm'
import MyTextError from '../component/MyTextError'
import MyPasswordInput from '../component/MyPasswordInput'
import MyProgress from '../component/MyProgress'
import MyBackground from '../component/MyBackground';
import MyView from '../component/MyView'
import MyDatePickerStart from '../component/MyDatePickerStart';
import MyDatePickerEnd from '../component/MyDatePickerEnd';
import MyAreaInput from '../component/MyAreaInput';
import MyLargeIconButton from '../component/MyLargeIconButton';

import Mission from '../entity/Mission';

class NewMission extends Component {
  constructor() {
    super();
    this.state = {
      mission: new Mission({ start: new Date(), deadline: new Date() }),
      showStartDatePicker: false, showEndDatePicker: false
    }
  }

  _newMission = () => {
    this.props.newMission(this.state.mission);
  }

  render() {
    const { request, newMission } = this.props;
    return (
      <MyBackground>
        <MyView>
          <MyTextTitle text={strings('newMission.subTitle')} />
          <MyProgress animating={request.inProgress} />
          <MyForm>
            <MyTextInput  placeholder={strings('newMission.title')} onChangeText={
              text => this.setState(prevState => ({
                mission: {
                  ...prevState.mission,
                  title: text
                }
              }))} />
            <MyAreaInput placeholder={strings('newMission.description')} onChangeText={
              text => this.setState(prevState => ({
                mission: {
                  ...prevState.mission,
                  description: text
                }
              }))} />
            <MyDatePickerStart onConfirm={this._handleStartDatePicked}
              isVisible={this.state.showStartDatePicker} date={this.state.mission.start}
              text={strings('newMission.dateStart')}
              toggleDatePicker={this._toggleStartDatePicker} />
            <MyDatePickerEnd onConfirm={this._handleEndDatePicked}
              isVisible={this.state.showEndDatePicker}
              text={strings('newMission.dateEnd')} date={this.state.mission.deadline}
              toggleDatePicker={this._toggleEndDatePicker} />
          </MyForm>
          {
            request.message ?
              <MyTextError text={request.message} />
              : null
          }

          <MyLargeIconButton icon="plus-circle" backgroundColor={uiTheme.palette.primaryColor}
            text={strings('newMission.create')} onPress={this._newMission} />
        </MyView>
      </MyBackground>
    );
  }

  _toggleStartDatePicker = () =>
    this.setState({ showStartDatePicker: !this.state.showStartDatePicker });

  _toggleEndDatePicker = () =>
    this.setState({ showEndDatePicker: !this.state.showEndDatePicker });

  _handleStartDatePicked = (date) => {
    this.setState(prevState => ({
      mission: {
        ...prevState.mission,
        start: date
      }, showStartDatePicker: !this.state.showStartDatePicker
    }));
  };

  _handleEndDatePicked = (date) => {
    this.setState(prevState => ({
      mission: {
        ...prevState.mission,
        deadline: date
      }, showEndDatePicker: !this.state.showEndDatePicker
    }));
  };
}

const mapStateToProps = state => {
  return ({
    request: state.MissionReducer.request
  });
}

export default connect(mapStateToProps, {
  newMission
})(NewMission);