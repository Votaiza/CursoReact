import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GyfExpertApp = () => {

    const [categories, setCategories] = useState(['Drama', 'Accion', 'Aventura']);

    /*
    const handleAdd = () => {
        setCategories([...categories, 'Comedia'])
    }
    */

    return (
        <>
            <h2>GyfExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />            

            <ol>
                {
                    categories.map( category => {
                        return <li key={category} >{category}</li>
                    } )
                }
            </ol>

        </>
    )
}



export default GyfExpertApp

