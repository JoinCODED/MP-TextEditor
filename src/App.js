import React, { Component } from 'react';
import './App.css';
import FilterButton from './FilterButton/FilterButton'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            styling : {
                bold: false,
                italic : false,
                underline : false,
            },
            color : 'black'
        }
    }


    colors = ['yellow', 'blue', 'red', 'black', 'purple']


    change = (style) => {
        if (style === 'bold'){
            this.setState({styling : {...this.state.styling ,bold : !this.state.styling.bold}})
        }else if( style === 'italic'){
            this.setState({styling : {...this.state.styling , italic : !this.state.styling.italic}})
        }else{
            this.setState({styling : {...this.state.styling , underline : !this.state.styling.underline}})
        }
    }

    colourChosen = (colour) => {
        this.setState({color : colour})
    }

    render (){


        let colourBoxes = this.colors.map(color => {
            return <button key={color} onClick={() => this.colourChosen(color)}/>
        })

        return (
            <div className='App'>
                <FilterButton clicked={this.change} styling={this.state.change} name='bold'/>
                <FilterButton clicked={this.change} styling={this.state.change} name='italic'/>
                <FilterButton clicked={this.change} styling={this.state.change} name='underline'/>
                <br/>
                <textarea/>
                <br/>
                {colourBoxes}

            </div>

        )
    }
}

export default App;
