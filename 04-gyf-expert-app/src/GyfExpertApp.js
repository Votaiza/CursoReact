import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GyfExpertApp = () => {

    const [categories, setCategories] = useState(['Comedia']);

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
                    categories.map( category => (
                        <GifGrid
                            key={category} 
                            category={category} />
                     ) )
                }
            </ol>

        </>
    )
}



export default GyfExpertApp

