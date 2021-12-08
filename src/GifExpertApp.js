import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr></hr>

            <AddCategory setCategories={setCategories} />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
