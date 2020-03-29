import React, {useEffect, useState} from "react";
import logoImg from '../../../assets/logo.svg'
import {Link, useHistory, useLocation} from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi'
import '../style.scss'
import clientHttp from "../../../clientHttp";
import FeedBack from "../../../assets/FeedBack";
import {onChangeMoney, reaisMask} from "./../../../assets/functions";

export default function () {
    const [state, setState] = useState({});
    let history = useHistory();
    const location = useLocation();
    useEffect(() => {
        if (!location.id || !location.name) {
            history.push('/logon')
        } else {
            setState({ong_id: location.id, name: location.name})
        }
    }, [location]);
    const {ong_id, name} = state;
    const create = async (event) => {
        event.preventDefault();
        const [{value: title}, {value: description}, {value}, btn] = event.target;
        btn.disabled = "true";
        btn.innerText = "Cadastrando ...";
        try {
            const {data} = await clientHttp.post(
                '/incidents',
                {title, description, value: value.replace('R$ ', '')},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': state.ong_id
                    }
                }
            );
            await FeedBack.fire({
                icon: 'success',
                title: `Caso Cadastrado`
            });
            history.push({
                pathname: '/profile',
                state: {id: ong_id, name}
            });
        } catch (e) {
            await FeedBack.fire({
                icon: 'error',
                title: `Oops..., algo deu errado`,
                footer: `<code>${e.message}</code>`
            });
        }
        btn.disabled = "false";
        btn.innerText = "Cadastrar";
        return false;

    };
    return (
        <div className={'new-incident-container'}>
            <div className={"content"}>
                <section>
                    <img src={logoImg} alt={'Be The Hero'}/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente, para encontrar um herói para resolver isso.</p>
                    <Link to={{
                        pathname: '/profile',
                        state: {id: ong_id, name}
                    }} className={"backl-ink"}>
                        <FiArrowLeft size={16} color={'#E02041'}/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={create}>
                    <input placeholder={'Titulo do caso'} type="text" required/>
                    <textarea placeholder={'Descrição'} required/>
                    <input
                        placeholder={'Valor em Reais'}
                        type="text"
                        required
                        onInput={reaisMask}
                        onBlur={onChangeMoney}
                    />
                    <button className="button" type={"submit"}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}