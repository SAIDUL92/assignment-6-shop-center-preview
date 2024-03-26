import Image from "next/image";

export default function Rating({ maxRaiting = 5 }) {

    return (
        <div className="mt-3 flex items-center justify-start gap-1">
            {Array.from({ length: maxRaiting }, (_, i) => (

                <Image key={i} src="/assets/svg/star.svg" alt="" width={20} height={20} />

            ))}
        </div>
    )
}


