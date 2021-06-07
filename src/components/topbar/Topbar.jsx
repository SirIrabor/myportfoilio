import './Topbar.scss';
import {Person,Mail} from '@material-ui/icons';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                 <a href="#intro" className="Logo">myPortfolio.</a>
                 <div className="itemContainer">
                     <Person className="icons"/>
                     <span>+234 9050998594</span>
                 </div>
                 <div className="itemContainer">
                    <Mail className="icons"/>
                     <span>michael.irabor6@gmail.com</span>
                 </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="Line1"></span>
                       <span className="Line2"></span>
                       <span className="Line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
