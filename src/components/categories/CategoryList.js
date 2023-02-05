import { useState, useEffect } from "react"
import { Category } from "./Category"
import { getCategories } from "../../managers/CategoriesManager"

export const CategoryList = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categoriesData => setCategories(categoriesData))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
        <h1>Categories</h1>

        <article className="categories">
            {
            categories.map(category => {
                return <Category category={category}  key={`category--${category.id}`}/>
            })
        }
        </article>
    </div>
    )
}