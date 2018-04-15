import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import MyBackground from '../component/MyBackground'
import MyActionButton from '../component/MyActionButton';
import { Actions } from 'react-native-router-flux';

export default class MissionList extends Component {

    render() {
        return (
            <MyBackground>
                <MyActionButton onPress={() => Actions.newMission()} />
            </MyBackground>
        )
    }
}