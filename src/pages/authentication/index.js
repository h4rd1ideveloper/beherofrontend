import React from "react";
import Form from "./components/Form"
import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import './style.scss'

export default function ({children, ...props}) {
    return (
        <div className={'logo-container'}>
            <section className={'form'}>
                <img src={logoImg} alt={'Be The Hero'}/>
                <Form/>
            </section>
            <img src={herosImg} alt={'Heros'}/>
        </div>
    );
}
