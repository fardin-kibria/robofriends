import React, {Component} from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ harError: true  })
    }


    render() {
        if (this.state.hasError){
            return <h1>oioops that is not good</h1>
        }
        return this.props.children;   
    }

}