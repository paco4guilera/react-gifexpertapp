import { Fragment, useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Breaking Bad'])
    
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={ setCategories}
            />
            <hr />
    
            <ol>
                {
                    categories.map(category =>
                        //(<li key={category}>{category}</li>)
                        <GifGrid
                            key={category}
                            category={category}
                        />
                        )
                }
            </ol>
        </Fragment>
    );
}

export default GifExpertApp;