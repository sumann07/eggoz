import React from 'react';
import "./DashboardLayout.css";
import srcUrl from "../../assets/eggoz.png";
import dash from '../../assets/dash.png';
import fav from "../../assets/fav.png";
import mar from "../../assets/mar.png";
import field from "../../assets/field.png";
import cat from "../../assets/cat.png";
import pro from "../../assets/pro.png";
import ord from "../../assets/ord.png";
import user from "../../assets/user.png";
import shipper from "../../assets/shipp.png";
import faq from "../../assets/faq.png";
import coupon from "../../assets/cou.png";
import mobile from "../../assets/mob.png";
import setting from "../../assets/setting.png";





import { Link, useLocation} from 'react-router-dom';

const navItems = [
    {
        name: "Dashboard",
        icon: dash,
        link:'/dashboard'
    },
    {
        name: "Favorites",
        icon: fav,
        link:'/favorite'

    }
]
const navItems2 = [
    {
        name: "Fields",
        icon: field,
        link:'/fields'
    },
    {
        name: "Markets",
        icon: mar,
        link:'/markets'

    },
    {
        name: "Categories",
        icon: cat,
        link:'/categories'

    },
    {
        name: "Products",
        icon: pro,
        link:'/products'

    },
    {
        name: "Orders",
        icon: ord,
        link:'/order'

    },
    {
        name: "Coupons",
        icon: coupon,
        link:'/coupons'

    },
    {
        name: "Users",
        icon: user,
        link:'/user'

    },
    {
        name: "Shippers",
        icon: shipper,
        link:'/shipper'

    },
    {
        name: "Faqs",
        icon: faq,
        link:'/faq'

    }


]
const navItems3 = [
    {
        name: "Medias Library",
        icon: dash,
        link:'/medias-libraray'
    },
    {
        name: "Payments",
        icon: coupon,
        link:'/payments'

    },
    {
        name: "Mobile App Settings",
        icon: mobile,
        link:'/mobile-app-settings'

    },
    {
        name: "Settings",
        icon: setting,
        link:'/settings'

    }
]

const DashboardLayout = ({children}) =>{
    const location = useLocation()
    return (
        <div className="dashboard-layout">
        <nav className="side-nav-bar">
            <div className="logo-container">
                <img src={srcUrl}/>
            </div>
            <div className="nav-container">
                {navItems.map((navItem, index) => (
                    <Link key={index} to={navItem.link}>
                    <div  className={`nav-item ${navItem.link === location.pathname ? 'selected':''}`}>
                      <img src=  {navItem.icon}/>
                        <label className="item-name">{navItem.name}</label>
                    </div>
                    </Link>
                ))}
            </div>
            <div className="nav-container">
                <p className="sub-heading">APP MANAGEMENT</p>
                {navItems2.map((navItem, index) => (
                    <Link key={index} to={navItem.link}>
                    <div  className={`nav-item ${navItem.link === location.pathname ? 'selected':''}`}>
                      <img src=  {navItem.icon}/>
                        <label className="item-name">{navItem.name}</label>
                    </div>
                    </Link>
                ))}
            </div>
            <div className="nav-container">
                <p className="sub-heading">SETTINGS</p>
                {navItems3.map((navItem, index) => (
                    <Link key={index} to={navItem.link}>
                    <div  className={`nav-item ${navItem.link === location.pathname ? 'selected':''}`}>
                      <img src=  {navItem.icon}/>
                        <label className="item-name">{navItem.name}</label>
                    </div>
                    </Link>
                ))}
            </div>
        </nav>
        <div className="main-containerr">
        {children}
        </div>
    </div>
    )
}
export default DashboardLayout;

