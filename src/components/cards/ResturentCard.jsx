export const ResturentCard = ({name, avgRating, area, lastMileTravelString, cuisines, cloudinaryImageId, type}) => {
    return (
        <div className="rounded bg-orange-500 text-white shadow-md">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="food-img" className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold uppercase">{name} </h2>
                <p>{area}, ({avgRating})</p>
                <p>{cuisines.join(', ')}</p>
                <small className="mt-3">{lastMileTravelString}</small>
            </div>
        </div>
    )
}