import React, { useState } from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {
  const [data, setData] = React.useState([])
  // axios just fires
  async function fetchData() {
    await axios.get('/api/pets')
      .then(res => {
        setData(res.data)
      }, [data])
  }
  React.useEffect(() => {

    fetchData()

  })


  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={data} />
    </>
  )
}

export default Root;
