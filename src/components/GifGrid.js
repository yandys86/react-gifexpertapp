// import React, { useState, useEffect }from 'react'
// import { getGifs } from '../helpers/getGifts';
// import { GiftGridItem } from './GiftGridItem';


// export const GifGrid = ( { category }) => {

//    //const [count, setCount] = useState(0);
//    const [images, setImages] = useState([]);

//     useEffect(() => {

//        getGifs(category)
//        .then(setImages) 
       
//    }, [category]);

           

//    //getGifs();
  
//     return (
//         <>
//             <h3>{ category }</h3>
//             <div className="card-grid">
            
                // {
                // images.map( img=> (

                // // <li key={img.id}> {img.title}   </li>,

                //     <GiftGridItem
                //     key = {img.id }
                //     //title = {img.title}

                //     {...img}
                //     />

                //             ) )

                //     }
            
//           </div>
//        </>
//     ) 
 
// }
//-------------------------------------------------------------------

//-----------------------hooks bases 


import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ( { category }) => {

      const {data:images, loading} = useFetchGifs( category );

        return(
            <>
                <h3>{ category }</h3>
                {loading && <p>Cargando</p>}
                <div className="card-grid">
                {
                images.map( img=> (
                    <GiftGridItem
                    key = {img.id }
                    {...img}
                    /> 
                    ) )                        
                    }
                </div>

            </>
        )
}