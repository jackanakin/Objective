import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-material-ui';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import b64 from 'base-64';

import MyBackground from '../component/MyBackground'
import MyActionButton from '../component/MyActionButton';
import MyButton from '../component/MyButton';

import { listParticipant, unlistParticipant } from './action/ParticipantAction';
import { uiTheme } from '../style/theme';
const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>

class ParticipantList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.listParticipant(this.props.mission.uid);
    }

    renderParticipant = (participant) => {
        return (
            <TouchableHighlight onPress={() => false} >
                <View style={{ flex: 1, padding: 25, borderBottomWidth: 1, borderColor: "#CCC" }}>
                    <Text key={participant.account} style={{ fontSize: 18 }}>{b64.decode(participant.account)}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        let list = null;
        if (!_.isEmpty(this.props.participantList)) {
            list = _.map(this.props.participantList, (val, key) => {
                return { ...val, key }
            });
        }

        return (
            <MyBackground>
                <FlatList
                    data={list}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => false} >
                            <View style={{ flex: 1, padding: 25, borderBottomWidth: 1, borderColor: "#CCC" }}>
                                <Text style={{ fontSize: 18 }}>{b64.decode(item.account)}</Text>
                            </View>
                        </TouchableHighlight>}
                />
            </MyBackground>
        )
    }

    componentWillUnmount() {
        this.props.unlistParticipant(this.props.mission.uid);
    }
}

mapStateToProps = state => {
    return {
        participantList: state.MissionReducer.participantSource,
        mission: state.MissionReducer.mission
    };
}

export default connect(mapStateToProps, { listParticipant, unlistParticipant })(ParticipantList);