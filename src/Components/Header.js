import React from 'react'
import Naviagtion from './Navigation'

function Header() {
    return (
        <div>
            <header className="border-b p-3 flex justify-between items-center">
                <span className="font-bold"> App Name </span>
                <Naviagtion />
            </header>
        </div>
    );
}

export default Header;