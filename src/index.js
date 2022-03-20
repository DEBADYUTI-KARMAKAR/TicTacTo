import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class Board extends React.Component{
    render(){
        return(
            <div className='board'>Game Board</div>
        );
    }
}

class Display extends React.Component{
    render(){
        return(
            <div className='display'>Game Display</div>
        );
    }
}
class TTT extends React.Component{

    render(){
        let name = "Debadyuti";

        return (
            <>
                <Board />
                <Display />
            </>
        );
    }
}
ReactDOM.render(<TTT />, document.getElementById("root"));

