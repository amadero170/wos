'use client'
import { signIn,signOut,useSession } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
const {data:session} = useSession()


    return(
        <nav className="flex bg-slate-900 justify-between items-center py-4 px-4">
            <Link href="/">
                <h1 className="text-white"> WOS </h1>
            </Link>
            {session?.user ?
            (
            <div className="flex gap-x-2 items-center">
                <Link href="/brokers" className="text-white">
                    Dashboard
                </Link>
                <div className="text-white">
                {session.user.name}
                </div>
                <button onClick={(()=>signOut({callbackUrl: "/"}))} className="rounded bg-sky-400 text-white px-3 py-2">
                    Logout
                </button>
            </div>
            ) :(
            <div className="flex gap-x-2 items-center">
                <Link href="/brokers" className="text-white">
                    Dashboard
                </Link>
                <button onClick={(()=>signIn())} className="rounded bg-sky-400 text-white px-3 py-2">
                    Login
                </button>
            </div>)}
    </nav>
    )
}
