import React from 'react'
import Container from '@components/Container'
import useMerchandise from '@hooks/useMerchandise'
import { Link } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

const imageURL = process.env.REACT_APP_IMAGE_URL

function Merchandise() {
    const { state } = useMerchandise()

    return (
        <Container>
            {state.loading ? (
                <div className="flex w-full justify-center">
                    <BarLoader width="100%" color='orange' />
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 md:px-14 lg:px-28">
                    {state.data.slice(0, 3).map((merchs, index) => (
                        <div key={index} className="relative aspect-h-1 aspect-w-1 bg-gray-400 rounded-xl md:rounded-2xl flex justify-center items-center">
                            <img className="w-full h-full object-cover rounded-xl md:rounded-2xl" alt="img" src={`${imageURL}${merchs.image}`} />
                        </div>
                    ))}

                    <Link to="/merchandise">
                        <div className="relative aspect-h-1 aspect-w-1 ">
                            <img className="w-full h-full object-cover border-4 border-themeOrange rounded-xl md:rounded-2xl" alt="img" src="https://www.danamon.co.id/-/media/ALL-CONTENT-ABOUT-DANAMON/BERITA/ARTICLE/Musisi-Internasional-yang-Konser-di-Indonesia/cover.jpg?h=395&w=695&hash=75EAFEF489D8B3394800C4F08B02C55E524CE86B" />
                            <div className="flex items-center justify-center">
                                <div className="bg-themeOrange p-2 rounded-xl px-6">
                                    <h6 className="text-white">
                                        See more
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            )}
        </Container>
    )
}

export default Merchandise
