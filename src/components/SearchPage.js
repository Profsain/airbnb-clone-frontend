import React from 'react'
import { Button } from '@material-ui/core'
import '../styles/SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>42 Stays . 18 January to 29 January . 3 Guest</p>
                <h1>Stays Nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms & Beds</Button>
                <Button variant='outlined'>More filters</Button>

                <SearchResult
                    img='https://a0.muscache.com/im/pictures/4a7e0246-9fd3-41d6-8577-437939f1f112.jpg?im_w=960'
                    title='Sandlers Place Beautiful 3 Three Bedroom Apartment'
                    location='Lagos-Nigeria'
                    description='With a living room that features an ultra-large comfy sofa, a supersized TV with access to the DSTV Premium bouquet, Netflix premium, superfast WiFi, and a PlayStation 4 console, you just might spend the whole of your stay on the couch (although that is not necessarily a bad thing).'
                    price='$386/night'
                    total='$1,200 total'
                    star='4.57'
                />

                 <SearchResult
                    img='https://a0.muscache.com/im/pictures/miso/Hosting-48610879/original/e020d147-9611-4b8f-bd6c-3870ce480991.jpeg?im_w=960'
                    title='Modern Stylish Beachfront Apartment'
                    location='Lagos-Nigeria'
                    description='This secure Apartment in the heart of Lekki/Victoria Island boasts gorgeous views of the Atlantic Ocean. With its modern amenities, beautiful swimming pools, the apartment has everything you need for a relaxing holiday.'
                    price='$149/night'
                    total='$642 total'
                    star='5.00'
                />
                
                <SearchResult
                    img='https://a0.muscache.com/im/pictures/af84ce51-396a-42b9-911c-349bd262e0cb.jpg?im_w=960'
                    title='La Orilla - Frente al Mar'
                    location='Canarias-Spain'
                    description='Villa única en primera línea en Playa Honda, Lanzarote. Equipada con todo lo necesario para que disfrutes de una estancia inolvidable en la isla de los volcanes.'
                    price='$205/night'
                    total='$615 total'
                    star='4.75'
                />

                <SearchResult
                    img='https://a0.muscache.com/im/pictures/6c4ac256-60da-40ff-a4d8-1095d662a909.jpg?im_w=960'
                    title='Tud Dret I - Lovely beachfront apartment with WIFI'
                    location='Lagos-Nigeria'
                    description='.This cozy apartment is located on the beautiful sandy beach of Diante. Enjoy the beautiful sea view of the terrace. The apartment has one bedroom with a double bed, bathroom with toilet and bidet, fully equipped kitchen, free wifi and a terrace.'
                    price='$67/night'
                    total='$200 total'
                    star='5.00'
                />

                <SearchResult
                    img='https://a0.muscache.com/im/pictures/1e84b455-5170-49de-a6f3-b346a7950da5.jpg?im_w=960'
                    title='Beautiful modern VI 3 bedroom apartment with pool'
                    location='Lagos-Nigeria'
                    description='Beautiful modern space 2 minutes from landmarkght in the heart of Victoria Island. You will love it.'
                    price='$129/night'
                    total='$623 total'
                    star='3.50'
                />

                <SearchResult
                    img='https://a0.muscache.com/im/pictures/5d1dd672-642b-4cd6-89b8-87644e1e9267.jpg?im_w=960'
                    title='5A 3BR Classic Shortlet w/ Pool - Eko Atlantic VI'
                    location='Eko Lagos-Nigeria'
                    description='The exquisite bedroom apartment is located in the prestigious Eko Atlantic City. It offers luxurious interiors throughout with excellent finishing. Enjoy the gorgeous en-suite facilities, lift & ocean view.'
                    price='$380/night'
                    total='$1,450 total'
                    star='5.00'
                />

                <SearchResult
                    img='https://a0.muscache.com/im/pictures/miso/Hosting-53730523/original/938412da-1642-4383-8707-ee377170a83f.jpeg?im_w=720'
                    title='LUXURY 2 BEDROOM APARTMENTS'
                    location='Ikoyi Lagos-Nigeria'
                    description='Luxury 2 Bedroom Apartments located in a highbrow and serene area of Ikoyi district of Lagos, This stylish place is perfect for individual, family or group business or leisure trips.'
                    price='$192/night'
                    total='$342 total'
                    star='4.35'
                />
            </div>           
        </div>
    )
}

export default SearchPage
