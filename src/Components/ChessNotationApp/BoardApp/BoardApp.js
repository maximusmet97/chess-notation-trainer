import { Component } from "react";
import Board from "../Board/Board";
import RandomNotation from "../RandomNotation/RandomNotation";

class BoardApp extends Component {

    state = {
        currentNotation: ''
    }

    getCurrentNotation = (notation) => {
        this.setState({
            currentNotation: notation
        });
    }

    render() {
        return(
            <div className="app">
                <Board getCurrentNotation={this.getCurrentNotation}/>
                <RandomNotation currentNotation={this.state.currentNotation}/>
            </div>
        );
    }
}

export default BoardApp;