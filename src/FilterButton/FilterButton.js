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

        let cssClass = 'btn btn-light'

        if (this.state.clicked){
            cssClass='btn btn-primary'
        }

        return (
            <div style={{display: 'inline', margin: '5px'}}>
                <button onClick={() => this.change(this.props.clicked)} className={cssClass}>{this.props.name}</button>
            </div>
        )}
}


export default FilterButton;




