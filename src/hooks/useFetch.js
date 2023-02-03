import React, { useEffect, useState } from 'react'
const useFetch = (url)=> {
      const [ data , setData ] = useState([])
      const [ loading , setLoading ] = useState(false)
      const [ error , setError ] = useState(null)
      useEffect(() => {
            const fetechData = async ()=>{
                  setLoading(true)
                  try {
                        const res = await fetch(url)
                        const json = await res.json()

                        setData(json)
                        setLoading(false)
                  } catch (error) {
                        setError(error)
                        setLoading(false)
                  }
            }
            fetechData()
      }, [url]);
      return { data , loading , error }
}
 export default useFetch