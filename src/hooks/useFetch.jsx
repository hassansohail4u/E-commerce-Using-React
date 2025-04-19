import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        

        getData()
    }, [])

    async function getData() {
        try {
            const data = await axios(url)
            setData(data.data)

        }
        catch (error) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }
    return [data, error, loading]
}

export default useFetch




