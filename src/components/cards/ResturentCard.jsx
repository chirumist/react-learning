export const ResturentCard = ({name, ratting, area, reach, cuision, image, type}) => {
    return (
        <div className="rounded bg-orange-500 text-white shadow-md">
            <img src={image} alt="food-img" className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold uppercase">{name} </h2>
                <p>{area}, Ratted({ratting})</p>
                <p>{cuision.join(', ')}</p>
                <small className="mt-3">{reach}</small>
            </div>
        </div>
    )
}