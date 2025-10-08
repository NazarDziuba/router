import {useEffect, useState} from "react";
import {NavLink, Outlet, useParams} from "react-router-dom";

export default function Meal({fetchData}) {

    const [meals, setMeals] = useState([]);


    const params = useParams();

    useEffect(() => {
        const category = params.category
        async function loadData(){
            try {
                const {meals} = await fetchData('filter.php', {c: category});
                setMeals(meals)
            }
            catch(err){
                alert(err)
            }
        }
        loadData()
    }, [])

    return(
        <div className="meals-wrapper">
            <div className="meals-main">
                    {meals.map(m => (
                        <div className='meal-div' key={m.idMeal}>
                            <button type='button' onClick={() => setParamsId({receiptId: m.idMeal})}>
                            <img alt='m.strMeal' src={m.strMealThumb} className='meal-img' />
                            <div className='meal-info'>
                                <p className='meal-p'>{m.strMeal}</p>
                            </div>
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    )
}