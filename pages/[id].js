import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <h3>{ id }</h3>
            <Link href="/">
                <a>Back</a>
            </Link>
        </>
    )
}

export default Post