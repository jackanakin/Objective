import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import MyBackground from '../component/MyBackground'
import MyActionButton from '../component/MyActionButton';
import MyButton from '../component/MyButton';

import { listMission } from './action/MissionAction';

class MissionList extends Component {
    componentWillMount() {
        this.props.listMission();
        this.criaFonteDeDados(this.props.missionList)
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.missionList)
    }

    criaFonteDeDados(missionList) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDeDados = ds.cloneWithRows(missionList)
    }

    render() {
        return (
            <MyBackground>
                <ListView
                    enableEmptySections
                    dataSource={this.fonteDeDados}
                    renderRow={data => (
                        <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#CCC" }}>
                            <Text style={{ fontSize: 25 }}>{data.title}</Text>
                        </View>
                    )
                    }
                />
                <MyActionButton onPress={() => Actions.newMission()} />

            </MyBackground>
        )
    }
}

mapStateToProps = state => {
    const missionList = _.map(state.MissionReducer.missionList, (val, uid) => {
        return { ...val, uid }
    })
    return { missionList }
}

export default connect(mapStateToProps, { listMission })(MissionList);