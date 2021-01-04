import  React  from "react";


export const GiftGridItem = ( {title, url } ) => {

//console.log(id, title)

    return (
        <div className= 'card animate__animated animate__bounce '>
              
                <img src = { url } alt ={ title }/>

                <p> { title } </p> 

        </div>
    )
}
 