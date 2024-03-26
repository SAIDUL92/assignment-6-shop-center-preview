'use client';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'

function Button({ path, children }) {
    const pathname = usePathname();
    const activeClass = pathname === path;
    const router = useRouter()
    return (
        <button
            onClick={() => router.push(path.toLowerCase())}
            className={`hover:border-b border-black block h-6 box-border mt-4 capitalize ${activeClass ? 'border-b border-black' : ''}`}>
            {children}
        </button>
    )
}

export default Button