import React from 'react'
import img1 from '../images/antony.webp'
import img2 from '../images/cities.png'
import '../css/Footer.css'
export default function Footer() {
    let url = '';
    let t=10;
    let w=10;
    return (
        <div>
            <section className="text-gray-600 body-font footerbackground">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap flex-row -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">

                            <h3 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Welcome to our new Website</h3>
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={img1} height={t} width={w} />
                            </div>

                            <a className="leading-relaxed text-base" href={url}><u>LEARN ABOUT VIRGINIAMERICA.COM</u></a>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">

                            <h3 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Deals from $49 dollars to your favourite cities</h3>
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={img2} height={t} width={w} />
                            </div>

                            <a className="leading-relaxed text-base" href={url}><u>See all cities</u></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
