import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import MyBackground from '../component/MyBackground'
import MyActionButton from '../component/MyActionButton';

export default class ProjectList extends Component {
    render() {
        return (
            <MyBackground>
                <Text style={{ fontSize: 18 }}>Testes</Text>
                <MyActionButton />
            </MyBackground>
        )
    }
}