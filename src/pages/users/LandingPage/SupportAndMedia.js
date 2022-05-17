import React from 'react'

function SupportAndMedia(props) {

    const images = props.images

    return (
        <div className="space-y-4 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-center">
                {props.title}
            </h1>
            <div className="w-5/6 mx-auto">
                <div className=" rounded-3xl border-4 border-themeOrange bg-container px-6 py-6 md:px-10 md:py-10">
                    <div className="flex flex-wrap mx-auto justify-center">
                        {
                            (images !== undefined && images !== null) &&
                            images.map((image, index) => (<div key={index} className="sm:m-3">
                                <img
                                    alt="supportmedia"
                                    src={image}
                                    className="object-contain h-28 md:max-w-md" />
                            </div>)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportAndMedia
