import Image from 'next/image'
import React from 'react'
import headerStyles from './header.module.css'
import { HEADER_IMAGES } from './helper'
const Header = ({ className = "" }) => {
    return (
        <div className={`${headerStyles.headerImagesContainer} ${className}`}>
            {
                HEADER_IMAGES.map(each => {
                    return (
                        <div key={each.id} >
                            <img src={each.src} className={headerStyles.headerImage} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Header 