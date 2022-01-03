import React from 'react'
import '../styles/Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home_section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/c80aa3d1-461a-419f-a72d-57a50309f476.jpg?im_w=960"
                    title="Villa rural con piscina privada"
                    description="Entire villa hosted by Carlos. This 300 sqm 5 bed/5 bath space is the epitome of modern luxury"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-31170206/original/c2ffcbe2-e4d7-4686-bd57-a2e4bdd15ef9.jpeg?im_w=960"
                    title="Seafront 5 bedroom penthouse"
                    description="Breathtaking serene paradise - even these words are inadequate to describe the experience of stepping into this magnificent seafront penthouse"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/31578c57-c715-4818-b45e-4d76e23e019d.jpg?im_w=960"
                    title="Studio Papaia in Paúl do Mar"
                    description="Four beautifully designed and sustainably built studios share the property with an infinity pool, social areas and luxurious plantations."
                />
            </div>

            <div className='home_section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/462ccec8-5891-4661-9121-95ec5cd605fe.jpg?im_w=960"
                    title="Pool and comfort in Fajã da Ovelha "
                    description="On the west side of the island, this beautiful house offers a swimming pool, jacuzzi and barbecue in a perfect and isolated setting."
                    price="$209/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/ebd86a7e-7410-4589-889a-a51578245944.jpg?im_w=960"
                    title="Tranquil Open-plan 2BR duplex w/pool+smart lock"
                    description="Tucked away in a secure & gated estate lies this minimalist 2-bed duplex. You get the best of both worlds"
                    price="$125/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/31578c57-c715-4818-b45e-4d76e23e019d.jpg?im_w=960"
                    title="Beautiful, modern 2 bdr Apt gym, pool, ocean view"
                    description="Stylish, modern & centrally located 2bdr apt with ocean views & a private beach a walk away, completed in June of 2021."
                    price="$125/night"
                />
            </div>

            <div className='home_section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-52365518/original/87f05ae7-4081-4279-9df5-d5f1c2accca9.jpeg?im_w=1200"
                    title="New 3BR APT in Banana Island with Lagoon view"
                    description="Our premium short let home features -Cozy 3 Bedrooms.-Airy Living room and dining room."
                    price="$280/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-52921307/original/dcf74582-a864-4f8a-bcae-442aaf8d8b20.jpeg?im_w=1200"
                    title="Cove Beach Lagos"
                    description="Enjoy a luxury beach getaway experience with friends, family and loved ones at Lagos private beach island"
                    price="$1,200/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/91358360-2f61-4dcb-8566-451797098036.jpg?im_w=960"
                    title="luxury 3bed in eko Atlantic with world class swimming pool"
                    description="Eko Atlantic City needs no introduction, the very milestone for luxury and exquisite lifestyle. If its comfortable, if its luxurious, if its mind-blowing, you’d find it here."
                    price="$450/night"
                />
            </div>
        </div>
    )
}

export default Home
