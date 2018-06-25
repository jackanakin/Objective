import React, { Component } from 'react';
import {
  Text,
  View, FlatList, TouchableHighlight, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Toolbar, BottomNavigation } from 'react-native-material-ui';
import _ from 'lodash';
import Modal from "react-native-modal";
import MyLargeIconButton from '../component/MyLargeIconButton';
import { uiTheme, errorTextColor } from '../style/theme';
import { listObjectives, concludeObjective, concludeMission } from './action/MissionAction';
import Objective from '../entity/Objective';
import firebase from 'firebase';
import b64 from 'base-64';

class Mission extends Component {
  constructor() {
    super();
    this.state = {
      objectiveSource: [], modalVisible: false, modalMissionVisible: false,
      objective: new Objective({ title: "", description: "", status: "A", responsible: null })
    };
  }

  showConcludeObjective = () => {
    const { currentUser } = firebase.auth();
    if (this.state.objective.responsible == currentUser.email
      && this.state.objective.status == "A" && !this.props.mission.finished) {
      return true;
    } else {
      return false;
    }
  }

  showConcludeMission = () => {
    const { currentUser } = firebase.auth();
    if (b64.decode(this.props.mission.leader) == currentUser.email
      && this.state.objective.status == "A" && !this.props.mission.finished) {
      return true;
    } else {
      return false;
    }
  }

  concludeObjective = () => {
    this.props.concludeObjective(this.state.objective, this.props.mission.key);
    this.setState({ modalVisible: false });
  }

  concludeMission = () => {
    this.props.concludeMission(this.props.mission.key);
    this.setState({ modalMissionVisible: false });
  }

  componentDidMount() {
    this.props.listObjectives(this.props.mission.key);
  }

  showObjectiveDialog = (objective) => {
    this.setState({ modalVisible: true, objective });
  }

  renderObjective = (objective) => {
    return (
      <View>
        <TouchableHighlight onPress={() => this.showObjectiveDialog(objective)} underlayColor={"#484848"} >
          <View style={{ flex: 1, padding: 25, borderBottomWidth: 1, borderColor: "#CCC" }}>
            <Text style={{ fontSize: 18 }}>{objective.title}</Text>
            {objective.status == "A" ?
              <Text style={{ color: errorTextColor, fontWeight: 'bold' }}>PENDENTE</Text> :
              <Text style={{ color: "#024403", fontWeight: 'bold' }}>CONCLUÍDO</Text>
            }
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const { mission } = this.props;
    let list = null;
    if (!_.isEmpty(this.props.objectiveList)) {
      list = _.map(this.props.objectiveList, (val, key) => {
        return { ...val, key }
      });
    }

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>

        {list ?
          <FlatList
            data={list}
            renderItem={({ item }) => this.renderObjective(item)} /> :
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text>Nenhum objetivo listado</Text>
          </View>
        }

        <View>
          <BottomNavigation style={{ container: { backgroundColor: uiTheme.palette.secondaryColor } }} >
            <BottomNavigation.Action
              key="new_objective"
              icon="flag"
              onPress={() => !mission.finished ? Actions.newObjective({ missionUID: mission.key }) : false}
            />
            <BottomNavigation.Action
              key="add_participant"
              icon="group-add"
              onPress={() => !mission.finished ? Actions.newParticipant({ missionUID: mission.key }) : false}
            />
            <BottomNavigation.Action
              key="finish"
              icon="beenhere"
              onPress={() => !mission.finished ? this.setState({ modalMissionVisible: true }) : false}
            />
          </BottomNavigation>
        </View>
        <Modal isVisible={this.state.modalVisible}>
          <View style={{
            backgroundColor: "white",
            padding: 22,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.1)"
          }}>
            <Text style={{ fontWeight: 'bold' }}>{this.state.objective.title}</Text>
            <Text>{this.state.objective.description}</Text>
            <Text>Responsável: {this.state.objective.responsible}</Text>
            {this.state.objective.status == "A" ?
              <Text style={{ color: errorTextColor, fontWeight: 'bold' }}>PENDENTE</Text> :
              <Text style={{ color: "#024403", fontWeight: 'bold' }}>CONCLUÍDO</Text>
            }

            {
              this.showConcludeObjective() ?
                <MyLargeIconButton icon="flag" backgroundColor="#024403"
                  text="CONCLUIR OBJETIVO" onPress={() => this.concludeObjective()} /> : null
            }

            <TouchableOpacity style={{ marginTop: 40 }} onPress={() => this.setState({ modalVisible: false })}>
              <Text style={{ fontWeight: 'bold' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={this.state.modalMissionVisible}>
          <View style={{
            backgroundColor: "white",
            padding: 22,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.1)"
          }}>

            <Text>Líder: {b64.decode(mission.leader)}</Text>
            <Text>Ínicio: {`${mission.start.day}/${mission.start.month}/${mission.start.year}`}</Text>
            <Text>Prazo: {`${mission.deadline.day}/${mission.deadline.month}/${mission.deadline.year}`}</Text>

            {
              this.showConcludeMission() ?
                <MyLargeIconButton icon="flag" backgroundColor="#024403"
                  text="CONCLUIR MISSÃO" onPress={() => this.concludeMission()} />
                : null
            }

            <TouchableOpacity style={{ marginTop: 40 }} onPress={() => this.setState({ modalMissionVisible: false })}>
              <Text style={{ fontWeight: 'bold' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return ({
    mission: state.MissionReducer.mission,
    objectiveList: state.MissionReducer.objectiveList
  });
}

export default connect(mapStateToProps, {
  listObjectives, concludeObjective, concludeMission
})(Mission);