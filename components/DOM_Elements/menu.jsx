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
                            <a className="menuItem">Home</a>
                        </Link>
                        <Link href="/blog">
                            <a className="menuItem">Blog</a>
                        </Link>
                        <Link href="/shop">
                            <a className="menuItem">Shop</a>
                        </Link>
                    </div>
                <MenuItem></MenuItem>
                </div>
            </header>
    )
}

export default Menu