import { useState } from 'react'
import { ResturentCard } from './cards/ResturentCard'
import { RESTURENTS_LIST } from '../constant'

const filterData = ({searchText, searchKey}, ArrayList) => {
    return ArrayList.filter((item) => item.data[searchKey].toLowerCase().includes(searchText.toLowerCase()))
}

export const MainComponent = () => {

    const [searchText, setSearchText] = useState("")

    const [resturentList, setResturentList] = useState(RESTURENTS_LIST)

    const performSearch = (e) => {
        setResturentList(filterData({ searchText, searchKey: 'name' }, RESTURENTS_LIST))
    }

    return (
        <div className="container mx-auto pb-8">
            <div className='w-full flex gap-3 mt-4'>
                <input type="text" className="bg-gray-200 rounded w-full px-4 py-2" placeholder='Search Here...' onChange={(e) => setSearchText(e.target.value)} />
                <button className='px-6 py-2 w-1/4 bg-green-600 text-white rounded' onClick={performSearch}>Submit</button>
            </div>
            <div className="main-wrapper grid grid-cols-4 gap-4 py-4">
                {
                    resturentList.map((resturent, index) => (
                        <ResturentCard key={index} {...resturent.data} type={resturent.cardType}></ResturentCard>
                    ))
                }
            </div>
        </div>
    )
}