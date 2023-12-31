import React from 'react'
import footerStyles from '../../styles/footer.module.css'
import Header from '../Intro/Header'
const Footer = ({ isMobileFooter = true, className = "" }) => {
    return (
        <div className={footerStyles.footerContainer}>
            <img src='/wishMacoLogo.png' className={`${footerStyles.footerLogo} ${className}`} />
            <Header isFooter={isMobileFooter} />
        </div>
    )
}

export default Footer