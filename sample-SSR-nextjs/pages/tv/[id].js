import React from 'react';
import Link from 'next/link';

const Show = ({show}) => {
    return (
        <div>
            <Link href="/tv">
                <a>{`<< Back`}</a>
            </Link>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?[pb]>/g, "")}</p>
            <img src={show.image.medium} />
            <br />
        </div>
    );
}

Show.getInitialProps = async function(context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`)

    return { show };
}

export default Show;
