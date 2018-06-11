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
import { uiTheme } from '../style/theme';
import {
  View,
  Alert,
  StyleSheet,
  Text, TextInput
} from 'react-native';
 
class NewObjective extends Component{
constructor(){
    super();
    this.state = {
title: null,
description: null

    }
}

_newObjective = () => {
    this.props.newObjective(this.state.title, this.props.missionUID);

  }

render(){
return (
    <MyBackground>
        <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <MyForm>

           <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({title:text})}
        value={this.state.title}
      />

            


              </MyForm>
              </ScrollView>
        
              <MyLargeIconButton icon="plus-circle" backgroundColor={uiTheme.palette.primaryColor}
            text={strings('newObjective.create')} onPress={this._newObjective} />


        </MyBackground>
)



}

}

const mapStateToProps = state => {
    return ({

    });
  }
  
  export default connect(mapStateToProps, {
    newObjective
  })(NewObjective);