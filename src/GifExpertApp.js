import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/*
    1) componenent AddCategory:  add category to categories
    2) Component GifGrid: retur images
        2.1)Method useFetchGifs: use helper getGifs to get the images and change loadingo value.
        
*/

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* agrega categoria al arreglo de categorias */}
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}
