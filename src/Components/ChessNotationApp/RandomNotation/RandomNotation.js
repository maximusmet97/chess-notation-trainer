import { Component } from "react";
import './RandomNotation.css';
import NOTATION_ALPHA from "../../../Common/CommonVars";

class RandomNotation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNotation: sessionStorage.getItem('currentNotation') === 'null' ? 
                             this.getRandNotation() : 
                             sessionStorage.getItem('currentNotation'),
            isWrong: false,
            score: isNaN(+sessionStorage.getItem('score')) ? 
                   0 : 
                   +sessionStorage.getItem('score')
        }
    }

    componentDidMount() {
        this.setState({
            currentNotation: sessionStorage.getItem('currentNotation') === 'null' ? 
                             this.getRandNotation() : 
                             sessionStorage.getItem('currentNotation'),
            isWrong: false,
            score: isNaN(+sessionStorage.getItem('score')) ? 
                   0 : 
                   +sessionStorage.getItem('score')
        });
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
        sessionStorage.setItem('score', score);
        sessionStorage.setItem('currentNotation', currentNotation);
        const isWrongAnswer = isWrong ? "wrong" : null;
        const phrase = isWrong ? "Wrong. Try again: " : 
                                 "Please show on the board this combination: ";

        return (
            <>
                <h2>{phrase}<span value={currentNotation} className={isWrongAnswer}>{currentNotation}</span></h2>
                <h2>Number of correct answers: <span value={score}> {score} </span></h2>
            </>
        );
    }

}

export default RandomNotation;