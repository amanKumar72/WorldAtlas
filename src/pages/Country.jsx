import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../components/Axios"
import CountryCard from "../components/CountryCard"
import Loader from "../components/Loader"

const Country = () => {
  const [isPending,startTransection] =useTransition()
  const [countries,setCountries] = useState([])
  useEffect(()=>{
    startTransection(async()=>{
      const res=await getCountryData()
      console.log(res.data)
      setCountries(res.data)
    })
  },[])

  if(isPending) return <div><Loader/></div>
  return (
    <div className="px-8 py-5 flex flex-wrap gap-5 md:gap-7 justify-center">
      {countries.map((country,index)=><CountryCard key={index} country={country}/>)}
    </div>
  )
}

export default Country
