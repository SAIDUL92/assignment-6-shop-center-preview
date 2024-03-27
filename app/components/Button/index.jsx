'use client';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

function Button({ path, children }) {
    const pathname = usePathname();
    const activeClass = pathname === path;
    const router = useRouter()
    useEffect(() => {
        router.prefetch(path);
    }, [router]);

    return (
        <button
            onClick={() => router.push(path.toLowerCase(), { scroll: false, })}

            className={`hover:border-b border-black block h-6 box-border mt-4 capitalize ${activeClass ? 'border-b border-black' : ''}`}>
            {children}
        </button>
    )
}

export default Button