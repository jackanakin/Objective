export default function Mission(props) {
    this.title = props.title;
    this.description = props.description;
    this.leader = props.leader;
    this.objectives = props.objectives;
    this.start = props.start;
    this.deadline = props.deadline;
}

export function saveValidate(mission) {
    let validation = {};
    if (!mission.title || mission.title.length <= 1) {
        validation.title = "validation.mission.title";
    }
    if (mission.start > mission.deadline) {
        validation.start = "validation.mission.date";
    }
    return validation;
};