import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class Board extends React.Component {
    render() {
        return (
            <div className='board'>
                <div className='title'>
                    Tic Tac Toe
                </div>
                <div className='content'>
                    <div className="ttt">
                        <div className='row'>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className='row'>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className='row'>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Display extends React.Component {
    render() {
        let gameStatus = 'Next move for "X"';

        return (
            <div className='display'>
                <div className='title'>
                    {gameStatus}
                </div>
                <div className='content'>
                    <div className='history'>
                        <button>Go to start</button>

                    </div>
                </div>
            </div>
        );
    }
}

class TTT extends React.Component {
    render() {
        return (
            <>
                <Board />
                <Display />
            </>
        );
    }
}

ReactDOM.render(<TTT />, document.getElementById("root"))