import React from "react";

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2,
            count1: 2
        };
        console.log(this.props.name + " constructor");
    }

    componentDidMount() {
        console.log(this.props.name + " componentDidMount");
    }

    render() {
        console.log(this.props.name + " rendering");
        const { name } = this.props;
        return (
            <>
                <h1>This is {name}</h1>
                <h2>Count: {this.state.count}</h2>
                <h2>Count 1: {this.state.count1}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count1: this.state.count1 + 1
                    });
                }}>Increment</button>
            </>
        );
    }
}

export default Demo;
