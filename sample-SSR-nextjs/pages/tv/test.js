import Link from "next/link";

function Test() {
    return (
        <div>
            <Link href="/tv">
                <a>{`<< Back`}</a>
            </Link>
            <h1>TEST page</h1>
        </div>
    );
}

export default Test
