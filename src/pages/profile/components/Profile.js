import React, {useEffect, useState} from 'react';
import logoImg from '../../../assets/logo.svg';
import {Link, useHistory, useLocation} from "react-router-dom"
import {FiPower, FiTrash2} from "react-icons/fi"
import "./../style.scss"
import clientHttp from "../../../clientHttp";
import FeedBack from "../../../assets/FeedBack";

export default function () {
    const [state, setState] = useState({});
    let history = useHistory();
    const location = useLocation();
    const fetchData = async () => {
        const {id, name} = location.state;
        try {
            const {data} = await clientHttp.get("/profile", {
                headers: {
                    'Authorization': id
                }
            });
            setState({name, id, incidentsList: data});
        } catch (e) {
            await FeedBack.fire({
                icon: 'error',
                title: `Oops... sentimos muito, mas algo deu errado`
            });
            history.push('/logon');
        }
    };
    useEffect(() => {
        if (!location.state) {
            history.push('/logon');
        } else {
            fetchData();
        }
    }, [location]);
    const {name, incidentsList, id} = state;
    return (
        <div className={"profile-container"}>
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem Vinda, {name}</span>
                <Link to={{pathname: "/incidents/new", id, name}} className={"button"}>
                    Cadastrar novo caso
                </Link>
                <button type={"button"} onClick={() => history.push('/logon')}>
                    <FiPower size={18} color={"#E02041"}/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {
                    incidentsList && incidentsList.map(({title, description, value, id, ong_id}, key) => {
                        const delet = async (event) => {
                            event.preventDefault();
                            event.target.disabled = "true";
                            const {status, ...rest} = await clientHttp.delete(`/incidents/${id}`, {
                                headers: {
                                    'Authorization': ong_id
                                }
                            });

                            if (status >= 400) {
                                await FeedBack.fire({
                                    icon: 'error',
                                    title: `Oops... sentimos muito, mas algo deu errado`
                                });
                            } else {
                                setState({name, incidentsList: incidentsList.filter((e) => e.id !== id), id: ong_id})
                            }
                        };
                        return (
                            <li key={key}>
                                <strong>CASO:</strong>
                                <p>{title}</p>
                                <strong>DESCRIÇÃO:</strong>
                                <p>{description}</p>
                                <strong>VALOR:</strong>
                                <p>{value}</p>
                                <button type={"button"} onClick={delet}>
                                    <FiTrash2 size={20} color={"#a8a8b3"}/>
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}