import React, { useState } from "react";
import {StyledAuthorization, Location, Login, Email, Password} from "./units";

const Authorization = () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <StyledAuthorization>
            <div><h1>Регистрация</h1></div>
            <div>
                <Login>
                    <div>
                        {login.length <= 2 ? "Логин должен содержать хотябы 3 символа": ""}
                    </div>
                    <div>
                        <input placeholder="Введите логин" value={login} onChange={(e) => setLogin(e.target.value)} />
                    </div>
                </Login>
                <Email>
                    <div>
                        {email.indexOf("@" && ".ru") === -1 ? "Email должен содержать данные символы: @ .ru" :
                        email.length < 5 ? "Email должен содержать хотябы 5 символов": ""}
                    </div>
                    <div>
                        <input placeholder="Введите email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </Email>
                <Password>
                    <div>
                        {password.length < 6 ? "Пароль должен содержать хотябы 6 символов" :
                        password.indexOf("!" || "#"|| "№") === -1 ? "Пароль должен содеражть один из следующих символов: !, #, № " : ""}
                    </div>
                    <div>
                        <input placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </Password>
                <Location>
                    <button>Регистрация</button>
                </Location>
            </div>
        </StyledAuthorization>
    );
};

export default Authorization;
