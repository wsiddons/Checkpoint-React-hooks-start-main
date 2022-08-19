import React, { useState } from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [selectedType, setSelectedType] = useState('all')
  const handleChange = (event) => {
    setSelectedType(event.target.value)
  }



  let arrFilterMap = props.pets.filter(itm =>
    selectedType.includes(itm.species)
  ).map(itm =>
    <SinglePet key={itm.id} pet={itm} />
  )

  let arrMap = props.pets.map(itm =>
    <SinglePet key={itm.id} pet={itm} />
  )

  return (
    <>
      <select onChange={handleChange}>
        <option value='all'>All</option>
        <option value='cats'>Cats</option>
        <option value='dogs'>Dogs</option>
      </select>
      <div className="pet-list">
        {selectedType === 'all' ? arrMap : arrFilterMap}
      </div>
    </>
  )
}

export default PetList;
