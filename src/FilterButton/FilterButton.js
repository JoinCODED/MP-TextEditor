import React, {Component} from 'react'



class FilterButton extends Component {
    constructor(props){
        super(props)

        this.state = {
            clicked : false
        }
    }

    change = (clicked) => {
        this.setState({clicked : !this.state.clicked})
        clicked(this.props.name)

    }

    render(){


        return (
            <div >
                <button onClick={() => this.change(this.props.clicked)}>{this.props.name}</button>
            </div>
        )}
}


export default FilterButton;




