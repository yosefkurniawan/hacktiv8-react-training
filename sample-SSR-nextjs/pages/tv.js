import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const Tv = ({shows}) => {
    return (
        <div>
            <Link href="/">
                <a>{`<< Back`}</a>
            </Link>
            <ul>
                {shows.map(show => (
                    <li key={show.id}>
                        <Link href="/tv/[id]" as={`/tv/${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/tv/test">
                <a>{`Test Page`}</a>
            </Link>
        </div>
    );
}

Tv.getInitialProps = async function() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Tv