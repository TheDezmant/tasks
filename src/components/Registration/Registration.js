import React, { useState } from "react";
import { Error, IconEye, Input } from "./UnitsRegistration";

const Password = ({ type, icon, onClick }) => {
  const password = {
    errors: {
      errorLength6: "Поле должно быть больше 6 символов",
      errorSymbols:
        "Поле должно содержать хотябы 1 из следующих символов:(#),(№),(!)",
      errorBigSymbol: "Поле должно содаржать хотябы 1 заглавную букву",
    },
  };
  const [passwordForm, setPasswordForm] = useState("");
  const [passwordOnBlurForm, setPasswordOnBlurForm] = useState(false);
  const [passwordSuperSymbols, setPasswordSuperSymbols] = useState(false);
  const [passwordBigSymbols, setPasswordBigSymbols] = useState(false);

  const minSymbolsPassword6 = () => {
    passwordForm.length <= 6
      ? setPasswordOnBlurForm(true)
      : setPasswordOnBlurForm(false);
  };

  const PasswordSuperSymbols = () => {
    passwordForm.includes("#")
      ? setPasswordSuperSymbols(false)
      : passwordForm.includes("№")
      ? setPasswordSuperSymbols(false)
      : passwordForm.includes("!")
      ? setPasswordSuperSymbols(false)
      : setPasswordSuperSymbols(true);
  };
  const PasswordBigSymbols = () => {
    passwordForm.match(/[A-ZА-Я]/)
      ? setPasswordBigSymbols(false)
      : setPasswordBigSymbols(true);
  };
  return (
    <div>
      {passwordOnBlurForm && <Error>{password.errors.errorLength6}</Error>}
      {passwordSuperSymbols && <Error>{password.errors.errorSymbols}</Error>}
      {passwordBigSymbols && <Error>{password.errors.errorBigSymbol}</Error>}
      <Input
        placeholder={"password"}
        type={type}
        value={passwordForm}
        onChange={(e) => setPasswordForm(e.target.value)}
        onBlur={() => {
          minSymbolsPassword6();
          PasswordSuperSymbols();
          PasswordBigSymbols();
        }}
      />
      <IconEye src={icon} onClick={onClick} />
    </div>
  );
};

const Registration = () => {
  const [loginForm, setLoginForm] = useState("");
  const [loginOnBlurForm, setLoginOnBlurForm] = useState(false);
  const [fieldIsRequired, setFieldIsRequired] = useState(false);
  const [willBeEmail, setWillBeEmail] = useState(false);

  const [emailForm, setEmailForm] = useState("");

  const login = {
    errors: {
      errorLength3: "Поле должно быть длиннее 3 символов",
      errorLength0: "Поле обязательно для заполнения",
    },
  };
  const email = {
    error: "Поле не является e-mailом",
  };
  const [openEye, setOpenEye] = useState(true);
  const iconOpenEye =
    "https://www.flaticon.com/svg/vstatic/svg/709/709724.svg?token=exp=1611562460~hmac=928f8e4bd589a9d4a5160ad8e3bd5b4b";
  const iconCloseEye =
    "https://www.flaticon.com/svg/vstatic/svg/565/565655.svg?token=exp=1611562460~hmac=cfc4ad4dd8616d6c0fa9d357431ac8fa";
  const minSymbolsLogin3 = () => {
    loginForm.length <= 3
      ? setLoginOnBlurForm(true)
      : setLoginOnBlurForm(false);
  };
  const fieldIsRequireted = () => {
    loginForm.length === 0
      ? setFieldIsRequired(true)
      : setFieldIsRequired(false);
  };
  const emailString = () => {
    emailForm.includes("@.ru")
      ? setWillBeEmail(true)
      : emailForm.includes("@")
      ? setWillBeEmail(false)
      : emailForm.includes(".ru")
      ? setWillBeEmail(false)
      : setWillBeEmail(true);
  };

  return (
    <>
      <div>
        <h1>Регистрация</h1>
      </div>
      {fieldIsRequired && <Error>{login.errors.errorLength0}</Error>}
      {loginOnBlurForm && <Error>{login.errors.errorLength3}</Error>}
      <div>
        <Input
          placeholder={"login"}
          value={loginForm}
          onChange={(e) => setLoginForm(e.target.value)}
          onBlur={() => {
            minSymbolsLogin3();
            fieldIsRequireted();
          }}
        />
      </div>
      {willBeEmail && <Error>{email.error}</Error>}
      <div>
        <Input
          placeholder={"email"}
          value={emailForm}
          onChange={(e) => setEmailForm(e.target.value)}
          onBlur={() => {
            emailString();
          }}
        />
      </div>
      <Password
        type={openEye ? "password" : "text"}
        icon={openEye ? iconOpenEye : iconCloseEye}
        onClick={() => setOpenEye(!openEye)}
      />
      <button>Войти</button>
    </>
  );
};

export default Registration;
