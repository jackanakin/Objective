import * as JsUtil from '../util/JsUtil';

export default function Mission(props) {
    this.title = props.title;
    this.description = props.description;
    this.leader = props.leader;
    this.objectives = props.objectives;
    this.start = props.start;
    this.deadline = props.deadline;
    this.finished = false;
}

export function saveValidate(mission) {
    let validation = {};
    if (!mission.title || mission.title.length <= 1) {
        validation.title = "validation.mission.title";
    }
    if (mission.start > mission.deadline) {
        validation.startDate = "validation.mission.startDate";
    }
    return validation;
};

export function buildMissionObject(mission) {
    let newObj = JsUtil.clone(mission);
    delete newObj.objectives;
    if (!newObj.description) { delete newObj.description; }
    newObj.start = JsUtil.toFirebaseDateObject(mission.start);
    newObj.deadline = JsUtil.toFirebaseDateObject(mission.deadline);
    return newObj;
};