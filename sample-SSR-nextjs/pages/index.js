import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>TESTING NEXT JS</h1>

            <header>
                <span>
                    <Link href="/post-list">
                        <a>Blog</a>
                    </Link>{" "}
                    &nbsp;|&nbsp;&nbsp;
                    <Link href="/tv">
                        <a>TV Shows</a>
                    </Link>
                </span>
            </header>
        </div>
    );
}

export default Index;
