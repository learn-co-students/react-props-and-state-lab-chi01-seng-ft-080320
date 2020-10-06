import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  listPets = () => {
    const petsList = this.props.pets.map((pet) => {
      return (
        <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={{id: pet.id, age: pet.age, name: pet.name, weight: pet.weight, type: pet.type, gender: pet.gender, isAdopted: pet.isAdopted}}
        />
      )
    }
    )
    return petsList
    console.log(petsList)
  }
  render() {
    return <div className="ui cards">{this.listPets()}</div>
  
  }
}

export default PetBrowser
