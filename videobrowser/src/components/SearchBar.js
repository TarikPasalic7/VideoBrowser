import React from 'react'
import { Input,Button } from 'semantic-ui-react'

const search =()=>{

    console.log("ispis")
}

const SearchBar =() => (
  <div>
     <Input  placeholder='Search...'  />
     <Button content='Search' onClick={search} />
  </div>
)

export default SearchBar