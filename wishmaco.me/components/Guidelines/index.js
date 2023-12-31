import React from 'react'
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen'
import ImageFormat from '../ImageFormat'
import CustomMarque from '../shared/marque'
import guideLinesStyles from './guidelines.module.css'
import { SectionImageAndContent } from './helper'

const GuideLinesSection = () => {

    const isMobile = useCheckMobileScreen();

    const RenderImageAndContent = () => {
        return (
            <div>
                {
                    SectionImageAndContent.map(each => {
                        return (
                            <div className={guideLinesStyles.sectionContainer} key={each.id}>
                                <div className={guideLinesStyles.sectionImageContainer}>
                                    {
                                        each.images.map(eachImage => {
                                            return <img src={eachImage} alt="headshot" key={eachImage} />
                                        })
                                    }
                                </div>
                                <div className={`${guideLinesStyles.sectionTextContainer} ${guideLinesStyles.sectionTextContainerMob}`}>
                                    {
                                        each.text.map(eachText => {
                                            return (
                                                <div className={guideLinesStyles.sectionText} key={eachText}>
                                                    <span style={{ color: each?.textColor }}>{eachText}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={`${guideLinesStyles.sectionTextContainer} ${guideLinesStyles.sectionTextContainerDesk}`}>
                                    {
                                        each.textDesc.map(eachText => {
                                            return (
                                                <div className={guideLinesStyles.sectionText} key={eachText}>
                                                    <span style={{ color: each?.textColor }}>{eachText}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className={guideLinesStyles.guideLinesContainer}>
                <div className={`${guideLinesStyles.initialSection} ${guideLinesStyles.initialSectionDesk}`}>
                    <span className={guideLinesStyles.lightBlueDesc}>PHOTO MUST BE WELL LIT, CLEAR WITH NO DARK SHADOWS</span>
                    <span>HAVE AN EMPTY BACKGROUND WITH YOUR FACE IN FOCUS</span>
                </div>
                <div className={`${guideLinesStyles.initialSection} ${guideLinesStyles.initialSectionMob}`}>
                    <span className={guideLinesStyles.lightBlueDesc}>PHOTO MUST BE WELL LIT</span>
                    <span className={guideLinesStyles.lightBlueDesc}>WITH NO DARK SHADOWS</span>
                    <span>HAVE AN EMPTY BACKGROUND</span>
                    <span>WITH YOUR FACE IN FOCUS</span>
                </div>
                <RenderImageAndContent />
                {
                    !isMobile ?
                        <ImageFormat /> :
                        <></>
                }
            </div>
        </>
    )
}

export default GuideLinesSection