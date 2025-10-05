import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export default function Catalog({fetchData}) {


    const [cat, setCat] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData('categories.php')
            .then(({categories}) => setCat(categories))
            .catch(error => setError(error))
    }, [])

    console.log(cat)

    return (
        <div className="catalog-wrapper">
                <div className="catalog-list-div">
                    <ul className="catalog-list-ul">
                    {cat.map(c => (
                        <li key={c.idCategory} className="catalog-list-li">
                            <NavLink to={`${c.strCategory}`} className='catalog-list-button'>{c.strCategory}</NavLink>
                        </li>
                    ))}
                    </ul>
                </div>
        </div>
    )
}