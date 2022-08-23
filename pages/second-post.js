import Link from 'next/Link'

export default function SecondPost() {
    return (
        <>
            <h1>Second post</h1>
            <Link href="/">
                Back
            </Link>
        </>
    )
}