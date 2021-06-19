import Link from "next/link"
import MenuItem from "../Functions/menuItem"

const Menu =  () => {

    return( 
            <header>
                 <div className="menuBar" id="menuBar">
                     <input type="checkbox"></input>
                     <div className="toggle" id="toggle">
                        <span/>
                        <span/>
                        <span/>
                     </div>
                    <div className="mobile" id="mobile">
                        <Link href="/">
                            <a className="menuItem"><span>Home</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
                            </a>
                        </Link>
                        <Link href="/blog">
                            <a className="menuItem"><span>Blog</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>
                            </a>
                        </Link>
                        <Link href="/shop">
                            <a className="menuItem"><span>Shop</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm4.996 12v10h-18v-10h18zm2-2h-22v14h22v-14zm-5.25 8h-11.5l-2.25 3h16l-2.25-3z"/></svg>
                            </a>
                        </Link>
                    </div>
                <MenuItem></MenuItem>
                </div>
            </header>
    )
}

export default Menu