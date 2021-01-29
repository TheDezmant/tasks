import React, { useState } from 'react';
import { Error, IconEye, Input } from './UnitsRegistration';

const maxLengthCreator = (maxLength) => {
    return `Поле должно быть больше ${maxLength} символов`;
};

const Password = ({ type, icon, onClick }) => {
    const password = {
        errors: {
            errorLength: maxLengthCreator(6),
            errorSymbols: "Поле должно содержать хотябы 1 из следующих символов:'!' '№' '#'",
            errorBigSymbol: 'Поле должно содаржать хотябы 1 заглавную букву'
        }
    };
    const [passwordForm, setPasswordForm] = useState('');
    const [passwordOnBlurForm, setPasswordOnBlurForm] = useState(false);
    const [passwordSuperSymbols, setPasswordSuperSymbols] = useState(false);
    const [passwordBigSymbols, setPasswordBigSymbols] = useState(false);

    const minSymbolsPassword = () => {
        setPasswordOnBlurForm(passwordForm.length <= 6);
    };

    const superSymbolFound = !![...passwordForm].find((s) => s === '#' || s === '№' || s === '!');
    const PasswordSuperSymbols = () => {
        setPasswordSuperSymbols(!superSymbolFound);
    };
    const PasswordBigSymbols = () => {
        setPasswordBigSymbols(!passwordForm.match(/[A-ZА-Я]/));
    };
    return (
        <div>
            {passwordOnBlurForm && <Error>{password.errors.errorLength}</Error>}
            {passwordSuperSymbols && <Error>{password.errors.errorSymbols}</Error>}
            {passwordBigSymbols && <Error>{password.errors.errorBigSymbol}</Error>}
            <Input
                placeholder={'password'}
                type={type}
                value={passwordForm}
                onChange={(e) => setPasswordForm(e.target.value)}
                onBlur={() => {
                    minSymbolsPassword();
                    PasswordSuperSymbols();
                    PasswordBigSymbols();
                }}
            />
            <IconEye src={icon} onClick={onClick} />
        </div>
    );
};

const Registration = () => {
    const [loginForm, setLoginForm] = useState('');
    const [loginOnBlurForm, setLoginOnBlurForm] = useState(false);
    const [fieldIsRequired, setFieldIsRequired] = useState(false);
    const [willBeEmail, setWillBeEmail] = useState(false);

    const [emailForm, setEmailForm] = useState('');

    const login = {
        errors: {
            errorLength: maxLengthCreator(3),
            errorEmptyField: 'Поле обязательно для заполнения'
        }
    };
    const email = {
        error: 'Поле не является e-mailом'
    };
    const [openEye, setOpenEye] = useState(true);
    const ICON_OPEN_EYE =
        'https://www.flaticon.com/svg/vstatic/svg/709/709724.svg?token=exp=1611562460~hmac=928f8e4bd589a9d4a5160ad8e3bd5b4b';
    const ICON_CLOSE_EYE =
        'https://www.flaticon.com/svg/vstatic/svg/565/565655.svg?token=exp=1611562460~hmac=cfc4ad4dd8616d6c0fa9d357431ac8fa';
    const minSymbolsLogin = () => {
        setLoginOnBlurForm(loginForm.length <= 3);
    };

    const fieldIsRequireted = () => {
        setFieldIsRequired(!loginForm.length);
    };
    const emailStringFound = !![...emailForm].find((s) => s === '@.ru' || s === '@' || s === '.ru');
    const emailString = () => {
        setWillBeEmail(!emailStringFound);
    };

    return (
        <>
            <div>
                <h1>Регистрация</h1>
            </div>
            {fieldIsRequired && <Error>{login.errors.errorEmptyField}</Error>}
            {loginOnBlurForm && <Error>{login.errors.errorLength}</Error>}
            <div>
                <Input
                    placeholder={'login'}
                    value={loginForm}
                    onChange={(e) => setLoginForm(e.target.value)}
                    onBlur={() => {
                        minSymbolsLogin();
                        fieldIsRequireted();
                    }}
                />
            </div>
            {willBeEmail && <Error>{email.error}</Error>}
            <div>
                <Input
                    placeholder={'email'}
                    value={emailForm}
                    onChange={(e) => setEmailForm(e.target.value)}
                    onBlur={() => {
                        emailString();
                    }}
                />
            </div>
            <Password
                type={openEye ? 'password' : 'text'}
                icon={openEye ? ICON_OPEN_EYE : ICON_CLOSE_EYE}
                onClick={() => setOpenEye(!openEye)}
            />
            <button>Войти</button>
        </>
    );
};

export default Registration;
