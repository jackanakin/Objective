import * as JsUtil from '../util/JsUtil';

export default function Objective(props) {
    this.title = props.title;
    this.description = props.description;
    this.responsible = props.responsible;
    this.status = props.status;
}

export function saveValidateObjective(objective) {
    let validation = {};
    if (!objective.title || objective.title.length <= 1) {
        validation.title = "validation.objective.title";
    }
    if (!objective.responsible) {
        validation.responsible = "validation.objective.responsible";
    }

    return validation;
};

export function buildObjectiveObject(objective) {
    let newObj = JsUtil.clone(objective);
    if (!newObj.description) { delete newObj.description; }
    return newObj;
};