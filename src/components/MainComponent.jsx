import { useState, useEffect } from 'react'
import { ResturentCard } from './cards/ResturentCard'
import { ShimmerCard } from './cards/ShimmerCard'
import { RESTURENTS_LIST } from '../constant'

const filterData = ({searchText, searchKey}, ArrayList) => {
    return ArrayList.filter((item) => item.data[searchKey].toLowerCase().includes(searchText.toLowerCase()))
}

export const MainComponent = () => {

    const [searchText, setSearchText] = useState("")

    const [allResturentList, setAllResturentList] = useState([])
    const [filteredResturentList, setFilteredResturentList] = useState(RESTURENTS_LIST)

    const performSearch = (e) => {
        setFilteredResturentList(filterData({ searchText, searchKey: 'name' }, allResturentList))
    }

    const getResturents = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.241949&lng=72.86806&page_type=DESKTOP_WEB_LISTING')
        const json = await res.json()
        const resturents = json?.data?.cards?.find((item) => item.cardType == "seeAllRestaurants")?.data?.data?.cards
        setAllResturentList(resturents)
        setFilteredResturentList(resturents)
        return json
    }

    useEffect(() => {
        getResturents()
    }, [])

    return (
        <div className="container mx-auto pb-8">
            <div className='w-full flex gap-3 mt-4'>
                <input type="text" className="bg-gray-200 rounded w-full px-4 py-2" placeholder='Search Here...' onChange={(e) => setSearchText(e.target.value)} />
                <button className='px-6 py-2 w-1/4 bg-green-600 text-white rounded' onClick={performSearch}>Submit</button>
            </div>
            <div className="main-wrapper grid grid-cols-4 gap-4 py-4">
                {
                    filteredResturentList.map((resturent, index) => (
                        allResturentList.length > 0 ? (
                        <ResturentCard key={index} {...resturent.data} type={resturent.cardType}></ResturentCard>
                        ) : (
                        <ShimmerCard key={index}></ShimmerCard>
                        )
                    ))
                }
            </div>
        </div>
    )
}