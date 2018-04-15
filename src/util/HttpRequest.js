export default class HttpRequest {
    constructor(props) {
        this.inProgress = props.inProgress === undefined ? false : props.inProgress;
        this.response = props.response;
        this.message = props.message;
    }
}