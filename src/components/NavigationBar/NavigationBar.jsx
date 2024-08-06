import React from "react"
import { Link } from "react-router-dom"
import './index.css';

const PAGES = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Profile',
        href: '/profile'
    }
]

const NavigationBar = ({
    darkMode,
}) => {

    return (
        <nav className={darkMode ? 'navigation-dark' : 'navigation'}>
            <h1 className="navigation-title">KATABook</h1>
            {PAGES.map((page, idx) => (
                <Link className="navigation-link" key={page.title} to={page.href} >{page.title}</Link>
            ))}
        </nav>
    )
}

export default NavigationBar


