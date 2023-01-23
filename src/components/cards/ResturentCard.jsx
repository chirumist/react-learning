import { Link } from "react-router-dom"
import {IMG_CDN_URL} from '../../constant'
export const ResturentCard = ({ id, uuid, name, avgRating, area, lastMileTravelString, cuisines, cloudinaryImageId, type }) => {
    return (
        <div className="rounded bg-orange-500 text-white shadow-md">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" className="w-full h-40 object-cover" />
            <div className="p-4">
                <Link to={`resturent/${id}`}>
                    <h2 className="text-2xl font-bold uppercase">{name} </h2>
                </Link>
                <p>{area}, ({avgRating})</p>
                <p>{cuisines.join(', ')}</p>
                <small className="mt-3">{lastMileTravelString}</small>
            </div>
        </div>
    )
}
const Card = {ResturentCard}
export default Card