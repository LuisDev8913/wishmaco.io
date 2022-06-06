import React from 'react'
import { headShotPlaceHolder } from '../../constants/images'
import { Button, CustomInput } from '../shared'
import formStyles from './form.module.css'
import { MINT_TYPES_DATA } from './mintTypesData'
const FormSection = () => {

    const RenderConnectButton = () => {
        return (
            <div className={formStyles.connectWalletContainer}>
                <span>CONNECT WALLET BEFORE SENDING</span>
                <Button title={"CONNECT"} className={formStyles.connectButton} textClassName={formStyles.connectButtonText} />
            </div>
        )
    }


    const RenderEachMintType = () => {
        return (
            <div className={formStyles.gridPricingContainer} >
                <div>
                    {
                        MINT_TYPES_DATA.map(each => {
                            return (
                                <div key={each.id} className={formStyles.eachPricingContainer}>
                                    <span className={formStyles.mintTypeText}>{each.name}</span>
                                    <div>
                                        <span className={formStyles.mintPriceText}>{each.price}</span>
                                        <span className={formStyles.mintSubscipt}>{each.unit}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <RenderConnectButton />
            </div>
        )
    }

    const InputBox = ({ rightText = "RIGHT", ...props }) => {
        return (
            <div className={formStyles.inputBoxContainer}>
                <CustomInput
                    className={formStyles.inputBox}
                    {...props}
                />
                <span className={formStyles.inputBoxContainerText}>{rightText}</span>
            </div>
        )
    }

    const RenderForm = () => {
        return (
            <div className={formStyles.formInputContainer}>
                <InputBox rightText="Owner" placeholder="Enter your name" />
                <InputBox rightText="NFT#" placeholder="Enter your item #" />
                <InputBox rightText="Email" placeholder="Enter your email" />
                <InputBox rightText="Mood" placeholder="Enter your mood choice" />
                <InputBox rightText="Photo" rightButton="Upload" placeholder="Max 3 Photos" buttonClassName={formStyles.uploadButton} />
            </div>
        )
    }

    return (
        <div className={formStyles.formContainer}>
            <span className={formStyles.title}>FACE ADD-ON</span>
            <div className={formStyles.formGridContainer}>
                <div className={formStyles.gridFirstItem}>
                    <img src={headShotPlaceHolder} className={formStyles.headshotImage} />
                    <RenderEachMintType />
                </div>
                <RenderForm />
            </div>
            <div className={formStyles.addressGuidelineText}>
                <span>EACH ADDRESS IS LIMITED TO 1 CUSTOMIZATION PER NFT</span>
            </div>
        </div>
    )
}

export default FormSection