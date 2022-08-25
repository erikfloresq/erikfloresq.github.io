import Link from 'next/Link'

const AboutMe = () => {
    return (
        <>
            <h1>About Me</h1>
            <p>Hi I'm Erik! nice to meet you! I like development and eat fancy food!</p>
            <Link href="/">
                <a>Back</a>
            </Link>
        </>
    )
}

export default AboutMe