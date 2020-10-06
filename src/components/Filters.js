import React from 'react'

class Filters extends React.Component {
  
  constructor() {
    super()
    this.state = {
      value: "value"
    }
  }
  filterChange = e => {
    this.setState({value: e.target.value})
    this.props.onChangeType(e.target.value)
  }

  showPets = () => {
    this.props.onFindPetsClick()
  }
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.filterChange} name="type" id="type" value={this.state.value}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.showPets}className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
