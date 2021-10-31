import { Component } from "react";
import './RandomNotation.css';
import NOTATION_ALPHA from "../../Common/CommonVars";

class RandomNotation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNotation: this.getRandNotation(),
            isWrong: false,
            score: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentNotation === this.state.currentNotation) {
            this.changeNotation();
        } else if (prevState === this.state) {
            this.changeRight();
        }
    }

    changeNotation = () => {
        this.setState(prevState => ({
            currentNotation: this.getRandNotation(),
            isWrong: false,
            score: prevState.score + 1
        }));
    }

    changeRight = () => {
        this.setState({
            isWrong: true
        }); 
    }

    getRandNotation = () => {
        return NOTATION_ALPHA[Math.floor(Math.random() * (7 - 0 + 1) + 0)] 
        + Math.floor(Math.random() 
        * (8 - 1 + 1) + 1)
    }

    render() {
        const {currentNotation, isWrong, score} = this.state;
        const isWrongAnswer = isWrong ? "wrong" : null;

        return (
            <>
                <h2>Please show on the board this combination: <span
                                                                    value={currentNotation}
                                                                    className={isWrongAnswer}
                                                                >{currentNotation}
                                                                </span>
                </h2>
                <h2>Number of correct answers: <span value={score}> {score} </span></h2>
            </>
        );
    }

}

export default RandomNotation;