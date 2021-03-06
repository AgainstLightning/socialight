import Link from 'next/link'

const Navbar = () => {
    let username = true;
    let user = null;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>HOME</button>
                    </Link>
                </li>

                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button>Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {!username && (
                    <li>
                        <Link href="/enter">
                            <button>Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar