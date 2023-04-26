import {Component} from "react";

class Comment extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {id, postId, name} = this.props.comment;
        return(
            <div>
                <div>id:{id}</div>
                <div>postId:{postId}</div>
                <div>name:{name}</div>
            </div>
        )
    }
}
export {Comment}