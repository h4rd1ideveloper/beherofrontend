import React from "react";
import InputMask from 'react-input-mask';
import FeedBack from "../../../assets/FeedBack";
import cliente from "./../../../clientHttp"
import logoImg from '../../../assets/logo.svg'
import {Link, useHistory} from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi'
import '../style.scss'

export default function () {
    let history = useHistory();

    async function register(event) {
        const [{value: name}, {value: email}, {value: whatsapp}, {value: city}, {value: uf}, btn] = event.target;
        btn.disabled = "true";
        btn.innerText = "Aguarde ...";
        event.preventDefault();
        try {
            const {data: {id}} = await cliente.post('/ongs', {name, email, whatsapp, city, uf});
            await FeedBack.fire({
                icon: 'success',
                title: ` ONG cadastrada com sucesso, seu ID ${id}`
            });
            history.push({
                pathname: '/logon',
                state: {id}
            });
        } catch (e) {
            await FeedBack.fire({
                icon: 'error',
                title: `Oops..., algo deu errado`
            });
        }
        btn.disabled = "false";
        btn.innerText = "Cadastrar";
        return false;
    }

    const uFmask = ({target}) => {
        const value = target.value.replace(/[0-9]/g, '');
        target.value = value.toUpperCase()
    };
    return (
        <div className={'register-container'}>
            <div className={"content"}>
                <section>
                    <img src={logoImg} alt={'Be The Hero'}/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to={'/logon'} className={"backl-ink"}>
                        <FiArrowLeft size={16} color={'#E02041'}/>
                        Logon
                    </Link>
                </section>
                <form onSubmit={register}>
                    <input placeholder={'Nome da ONG'} type="text" required/>
                    <input placeholder={'E-mail'} type="email" required/>
                    <InputMask mask="(99) 9 9999-9999" placeholder={'WhatsApp'} type={"tel"} required/>
                    <div className="input-group">
                        <input placeholder={"Cidade"} type="text" required/>
                        <input
                            maxLength={2}
                            placeholder={'UF'}
                            type={"text"}
                            onInput={uFmask} required
                        />
                    </div>
                    <button className="button" type={"submit"}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}