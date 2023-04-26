import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {id, userId, title} = this.props.post;
        return(
            <div>
                <div>id:{id}</div>
                <div>userId:{userId}</div>
                <div>title:{title}</div>
            </div>
        )
    }
}
export {Post}