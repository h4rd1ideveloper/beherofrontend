import React from "react";
import {FiLogIn} from "react-icons/fi"

export default function () {
    return (

        <form>
            <h1>Faça seu logon</h1>
            <input placeholder={'Sua ID'} type={'text'} required/>
            <button className={'button'} type={'submit'}>Entrar</button>
            <a href={'/register'}>
                <FiLogIn size={16} color={'#E02041'}/>
                Não tenho cadastro
            </a>
        </form>
    );
}