'use client'
import Image from "next/image"

function CustomImage({ imageUrl }) {

    return <Image
        src={imageUrl}
        className="w-[100px] h-[100px] mx-auto border object-cover"
        alt="gallery image"
        width={400}
        height={500}
    />

}

export default CustomImage