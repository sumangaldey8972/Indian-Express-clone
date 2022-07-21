
import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import OpenModal from "./OpenModal"
import Search from "./SearchIcon"

export const Navbar = () => {
    return (
        <div>
            <div className={style.navbar_container} >
                <div className={style.openmodal}>
                    <OpenModal/>
                </div>

                <div className={style.other_link} >
                    <Link to='/' > <p className={style.p} > Home </p> </Link>
                    <Link to='/' > <p className={style.p} > Explained </p> </Link>
                    <Link to='/' > <p className={style.p}> Plotical Pulse </p> </Link>
                    <Link to='/' > <p className={style.p}> India </p> </Link>
                    <Link to='/cities' > <p className={style.p}> Cities </p> </Link>
                    <Link to='/' > <p className={style.p}> Opinion </p> </Link>
                    <Link to='/' > <p className={style.p}> Entertaiment </p> </Link>
                    <Link to='/' > <p className={style.p}> Videos </p> </Link>
                    <Link to='/' > <p className={style.p}> Sports </p> </Link>
                    <Link to='/' > <p className={style.p}> Audio </p> </Link>
                    <Link to='/' > <p className={style.p}> Education </p> </Link>
                    <Link to='/signin' > <p className={style.p}> Sign in </p> </Link>
                    <Link to='/subscribe' > <p className={style.subscribe} > Subscribe </p> </Link>
                </div>

                <div>
                    <Search/>
                </div>


            </div>
        </div>

    )
}
