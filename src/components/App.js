import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  fetchPets = () => {
    const {type} = this.state.filters
    let baseUrl = '/api/pets'
    if(type !== 'all'){
      baseUrl += `?type=${type}`
    }
    fetch(baseUrl)
      .then(res => res.json())
      .then(pets => 
        this.setState({
          pets: pets
        })
      );
  }

  onFindPetsClick = () => {
    this.fetchPets()
  }

  onAdoptPet = (petId) => {
    this.setState(prevState => {
      return {
        pets: prevState.pets.map(pet =>
          pet.id === petId ?
          { ...pet, isAdopted: true } : pet)
      }
    })
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
