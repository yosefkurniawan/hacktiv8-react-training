import Link from "next/link";

const PostLink = props => {
    return (
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    );
};

const PostList = () => {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <PostLink title="Hello Next.js" />
                </li>
                <li>
                    <PostLink title="Learning Next.js" />
                </li>
                <li>
                    <PostLink title="Learning SSR" />
                </li>
            </ul>
        </div>
    );
};

export default PostList;
