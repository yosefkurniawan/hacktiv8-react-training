import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>TESTING NEXT JS</h1>

            <header>
                <span>
                    <Link href="/post-list">Blog</Link>
                </span>
            </header>
        </div>
    );
}

export default Index;
