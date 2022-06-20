import "./App.css";
import Navbar from './components/Navbar'
import countriesJson from './countries.json'
import {useState} from 'react'
import CountriesList from './components/CountriesList'
import {Routes, Route} from 'react-router-dom'
import CountriesDetails from './components/CountriesDetails'


function App() {

  const [countries, setCountries] = useState(countriesJson)

  return (  
  <div className="App">
    <Navbar />
    <CountriesList  countries={countries}/>
    <Routes>
      <Route path="/" element={<CountriesList />} />
      <Route path="/:alpha3Code" element={ <CountriesDetails country = {countries}/>}/>
    </Routes>

  </div>
  )
}
export default App