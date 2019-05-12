import React, {Component} from 'react'

export default class FilterString extends Component {
    constructor(){
        super()
     this.state = {
         unFilteredArry: ['Hello','Cats', 'Dogs'],
         userInput : '',
         filteredArry : []
        }

    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Fliter String</h4>
            <span className="puzzleText">unFiltredArray</span>
            <input className="inputLine" onChange={this.state.userInput} />
            <button className="confirmationButton" onClick={this.state.filteredArry}></button>
            <span className="resultsBox filterStringRB">filteredArray</span>
        </div>
        )
    }
}

