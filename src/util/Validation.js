export default class Validation {
    constructor(props) {
        this.empty = props.empty === undefined ? true : props.empty;
        this.response = props.response;
    }
}