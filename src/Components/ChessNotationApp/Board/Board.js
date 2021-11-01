import { Component } from "react";
import NOTATION_ALPHA from "../../../Common/CommonVars";
import './Board.css';

class Board extends Component {
    
    onClickCell = (event) => {
        this.props.getCurrentNotation(event.target.id);
    }

    createCells = (rowNum) => {
        let cells = [];
        for (let i = 1; i <= 8; i++) {
            let id = `${NOTATION_ALPHA[i-1]}${rowNum}`;
            let cellColor = '';

            if (rowNum % 2 === 0) {
                if (i % 2 === 0) {
                    cellColor = 'black';
                } else {
                    cellColor = 'white';
                }
            } else if (rowNum % 0 !== 2) {
                if (i % 2 === 0) {
                    cellColor = 'white';
                } else {
                    cellColor = 'black';
                }
            }

            cells.push(
                <div 
                    key={id}
                    id={id}
                    className={cellColor}
                    onClick={this.onClickCell}
                ></div>

            );
        }

        return cells;
    }

    createRows = () => {
        let rows = [];
        for (let i = 8; i >= 1; i--) {
            let cells = this.createCells(i);
            rows.push(
                <div className="row" key={i}>
                    {cells}
                </div>
            );
        }

        return rows;
    }

    render() {
        const content = this.createRows();
        return(
            <div className="board">
                {content}
            </div>
        );
    }
}

export default Board;