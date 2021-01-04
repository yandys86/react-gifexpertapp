import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifts';




export const useFetchGifs = ( category ) => {
    
    const [state, setstate] = useState({

        data: [],
        loading: true

    });  
    
    
    useEffect(() => {

        getGifs( category ).then( img=>{ 

                    setTimeout(() => {
                
                        setstate({
                        data: img, 
                        loading: false
                    })
                    
                }, 3000);

         }  )       

    }, [category])

    return state;

}
