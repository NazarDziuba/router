import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Meal({fetchData}) {

    const [meals, setMeals] = useState([]);

    const params = useParams();

    useEffect(() => {
        const category = params.category
        fetchData('filter.php', {c: category})
            .then(({meals}) => setMeals(meals))
    }, [])
    console.log(meals);


    return(
        <div className="meals-wrapper">
            <div className="meals-main">
                    {meals.map(m => (
                        <div className='meal-div' key={m.idMeal}>
                            <img alt='m.strMeal' src={m.strMealThumb} className='meal-img' />
                            <div className='meal-info'>
                                <p className='meal-p'>{m.strMeal}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}