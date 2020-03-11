import { useRouter } from 'next/router';
import { Link } from "next/link";

const Post = () => {
    const router = useRouter();
    return (
        <div>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
            <Link href="/">Back</Link>
        </div>
    );
}

export default Post;