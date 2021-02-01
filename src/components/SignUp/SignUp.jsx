import React, { useEffect, useState } from 'react'
import emailValidator from '../../validators/emailValidator'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Dropdown from '../Dropdown/Dropdown'
import TextField from '../TextField/TextField'

import './SignUp.css'

const languages = [
  'Русский',
  'Английский',
  'Китайский',
  'Испанский',
  'Арабский',
]

export default function SignUp() {
  const [formCorrect, setFormCorrect] = useState(false)

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const [language, setLanguage] = useState('')

  const [agree, setAgree] = useState(false)

  const nameChangeHandler = (event) => {
    const name = event.target.value
    setName(name)

    // может содержать только буквы, пробел и дефис
    if (!/^[а-яА-ЯA-Za-z\s-]+$/.test(name)) {
      setNameError('может содержать только буквы, пробел и дефис')
    } else {
      setNameError('')
    }
  }

  const emailChangeHandler = (event) => {
    const email = event.target.value
    setEmail(email)
    if (!emailValidator(email)) {
      setEmailError('Неправильно введен email')
    } else {
      setEmailError('')
    }
  }

  const phoneChangeHandler = (event) => {
    const phone = event.target.value
    setPhone(phone)

    // Можно ввести только 11 цифр, круглые скобки, дефис, плюс
    if (phone?.match(/\d/g)?.length > 11) {
      setPhoneError('Телефон не может содержать больше 11 цифр')
    } else if (!/^[\d()\-+]+$/g.test(phone)) {
      setPhoneError('Только цифры, скобки, -, +')
    } else {
      setPhoneError('')
    }
  }

  const languageSelectHandler = (lang) => {
    setLanguage(lang)
  }

  const register = () => {
    // emulate post request
    console.log('register', { name, email, phone, language, agree })
  }

  useEffect(() => {
    setFormCorrect(
      name &&
        !nameError &&
        email &&
        !emailError &&
        phone &&
        !phoneError &&
        agree &&
        language
    )
  }, [name, nameError, email, emailError, phone, phoneError, language, agree])

  return (
    <div className="form">
      <div className="form__header">
        <h1>Регистрация</h1>
        <div className="form__login">
          Уже есть аккаунт? <a href="/">Войти</a>
        </div>
      </div>
      <TextField
        name="Имя"
        value={name}
        onChange={nameChangeHandler}
        errorText={nameError}
        placeholder="Введите Ваше имя"
      />
      <TextField
        name="Email"
        type="email"
        value={email}
        onChange={emailChangeHandler}
        errorText={emailError}
        placeholder="Введите ваш email"
      />
      <TextField
        name="Номер телефона"
        value={phone}
        type="tel"
        onChange={phoneChangeHandler}
        errorText={phoneError}
        placeholder="Введите номер телефона"
      />
      <Dropdown
        name="Язык"
        placeholder="Язык"
        variants={languages}
        onSelect={languageSelectHandler}
      />
      <Checkbox
        isCheched={agree}
        onClick={() => {
          setAgree(!agree)
        }}
      >
        Принимаю <a href="/">условия</a> использования
      </Checkbox>
      <Button
        text="Зарегистрироваться"
        disabled={!formCorrect}
        onClick={register}
      />
    </div>
  )
}
