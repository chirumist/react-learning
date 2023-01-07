import { ResturentCard } from './cards/ResturentCard'

const resturents = [
    {
        cardType: "sliderCard",
        data: {
            name: 'The Tea pie',
            image: 'https://picsum.photos/200/300',
            ratting: '4.5',
            area: 'Borivali',
            reach: '1.2 Km Away',
            cuision: [
                "Italian",
                "Chines",
                "Desi",
                "American"
            ]
        }
    },
    {
        cardType: "sliderCard",
        data: {
            name: 'The Tea pie',
            image: 'https://picsum.photos/200/300',
            ratting: '4.5',
            area: 'Borivali',
            reach: '1.2 Km Away',
            cuision: [
                "Italian",
                "Chines",
                "Desi",
                "American"
            ]
        }
    },
    {
        cardType: "sliderCard",
        data: {
            name: 'The Tea pie',
            image: 'https://picsum.photos/200/300',
            ratting: '4.5',
            area: 'Borivali',
            reach: '1.2 Km Away',
            cuision: [
                "Italian",
                "Chines",
                "Desi",
                "American"
            ]
        }
    },
    {
        cardType: "sliderCard",
        data: {
            name: 'The Tea pie',
            image: 'https://picsum.photos/200/300',
            ratting: '4.5',
            area: 'Borivali',
            reach: '1.2 Km Away',
            cuision: [
                "Italian",
                "Chines",
                "Desi",
                "American"
            ]
        }
    }
]
export const MainComponent = () => {
    return (
        <div className="container mx-auto">
            <div className="main-wrapper grid grid-cols-4 gap-4 py-4">
                {
                    resturents.map((resturent, index) => (
                        <ResturentCard key={index} {...resturent.data} type={resturent.cardType}></ResturentCard>
                    ))
                }
            </div>
        </div>
    )
}