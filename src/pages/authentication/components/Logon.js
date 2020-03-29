import React, {useEffect, useRef} from "react";
import {Link, useHistory, useLocation} from "react-router-dom"
import cliente from "./../../../clientHttp"
import herosImg from '../../../assets/heroes.png'
import logoImg from '../../../assets/logo.svg'
import '../style.scss'
import {FiLogIn, FiAward} from "react-icons/fi"
import FeedBack from "../../../assets/FeedBack";

export default function ({children, ...props}) {
    let history = useHistory();
    const location = useLocation();
    const inputID = useRef(null);
    useEffect(() => {
        if (location &&
            location.state &&
            location.state.id) {
            inputID.current.value = location.state.id
        }

    }, [location]);

    async function login(event) {
        event.preventDefault();
        const [{value: id}, btn] = event.target;
        btn.disabled = "true";
        btn.innerText = "Aguarde ...";
        try {
            const {data: {name}} = await cliente.post('/session', {id});
            await FeedBack.fire({
                icon: 'success',
                title: `Bem vindo ${name}`
            });
            history.push({
                pathname: '/profile',
                state: {id, name}
            });
        } catch (e) {
            await FeedBack.fire({
                icon: 'error',
                title: `Oops..., não encontramos uma ONG refetente a este ID`
            });
        }
        btn.disabled = "false";
        btn.innerText = "Entrar";
        return false;
    }

    return (
        <div className={'logo-container'}>
            <section className={'form'}>
                <img src={logoImg} alt={'Be The Hero'}/>
                <form onSubmit={login}>
                    <h1>Faça seu logon</h1>
                    <input ref={inputID} placeholder={'Sua ID'} type={'text'} required/>
                    <button className={'button'} type={'submit'}>Entrar</button>
                    <Link to={'/register'} className={"backl-ink"}>
                        <FiLogIn size={16} color={'#E02041'}/>
                        Não tenho cadastro
                    </Link>
                    <Link to={'/'} className={"backl-ink"}>
                        <FiAward size={16} color={'#E02041'}/>
                        Conhecer ONGs cadastradas
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt={'Heros'}/>
        </div>
    );
}
