import { useEffect, useState } from "react"
import techStoreDb from "../api/techStoreDb";

export const useFetch = ( url ) => {

    const [data, setData ] = useState();
    const [error , setError ] = useState();
    const [isLoading, setIsLoading ] = useState(true);


    const fetchData = async () => {
        setIsLoading(true);

        try {
            const { data: dataAxios } = await techStoreDb.get(`${ url }`);
            setData(dataAxios);
            setIsLoading(false);

        } catch (error) {

            console.log(error);
            setError('Internal server Error');
            alert('Internal Server Error');
            
        }finally{
            setIsLoading(false);
        }
        
    }
    useEffect(() => {
        fetchData()
    },[])

    return{
        isLoading,
        data,
        error
    }
}