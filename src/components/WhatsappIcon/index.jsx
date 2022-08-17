import React from 'react';
import { Whatsapp, Img } from './style.jsx'
import { imgs } from '../../assets/all';

function WhatsappIcon() {
    return (
        <>
            <Whatsapp href={'https://api.whatsapp.com/send?phone=5521976959128&text=Fale%20Conosco!'} target={'blank'}>
                <Img src={imgs.whatsappicon}></Img>
            </Whatsapp>
        </>
    )
}

export default WhatsappIcon