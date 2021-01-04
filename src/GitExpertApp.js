
import React , { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = (()=>{

    // const categories = ['One Punch', 'Samurat','Dragon Ball'];
// const [categories, setCategories] = useState( ['One Punch', 'Samurat','Dragon Ball']);
const [categories, setCategories] = useState( ['Dragon Ball']);
const handleAdd = () =>{
        
        //setCategories( [...categories, 'Yiyo'] );

        


        setCategories( cats => [...cats,'Yiyo']);


}

return(
    <>
        <h2>GitExpertApp</h2>
        <AddCategory setCategories = { setCategories }/> 
        <hr/>
        
        <button  onClick={ handleAdd  }>Agregar</button>
        <ol>
            {
                categories.map( category => (
                //<li key={ category }> { category } </li>,

                <GifGrid
                key = { category }  
                category = { category }
                />

                ))
            }
        </ol>

    </>
);

})






export default GitExpertApp;