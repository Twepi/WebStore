import React, { SetStateAction, useState } from 'react';
import styles from './checkoutpage.module.scss'

let errors:{name: string, error: string}[] = []

export function CheckoutPage() {
  

  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [emailValue, setEmailValue ] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [countryValue, setCountryValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  const [emailIsTouched, setEmailIsTouched] = useState(false)
  const [nameIsTouched, setNameIsTouched] = useState(false)
  const [cityIsTouched, setCityIsTouched] = useState(false)
  const [countryIsTouched, setCountryIsTouched] = useState(false)
  const [phoneIsTouched, setPhoneIsTouched] = useState(false)

  const [emailValid, setEmailValid] = useState(false)
  const [nameValid, setNameValid] = useState(false)
  const [cityValid, setCityValid] = useState(false)
  const [countryValid, setCountryValid] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)


  const checkValidityEmail = (email: string, setValid: React.Dispatch<SetStateAction<boolean>>) => {
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push({name: 'email', error: 'Email should contain a @'})
      setValid(false)
    } else if (email.indexOf(".") === -1) {
      errors.push({name: 'email', error: "Email should contain at least one dot"});
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const checkValidityText = (str: string, setValid: React.Dispatch<SetStateAction<boolean>>, name: string) => {
    if (/\d/.test(str)) {
      errors.push({name: name, error: str + " can't contain a number"})
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const checkValidityPhone = (str: string, setValid: React.Dispatch<SetStateAction<boolean>>) => {
    if (/[a-zA-Z]/g.test(str)) {
      errors.push({name: 'phone', error: str + " can't contain a letter"})
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const checkIsFormValid = () => {
    let valid = emailValue !== '' && nameValue !== '' && cityValue !== '' && countryValue !== '' && phoneValue !== '' &&
                emailValid && nameValid && cityValid && countryValid && phoneValid
    setIsFormValid(valid)
    console.log(errors)
  }


  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>checkout</h2>
        {!isFormValid && isSubmitted && (
          <div>
            {errors.map((value) => {
              <span>{value.error}</span>
            })}
          </div>
        )}
          <legend>Contact info</legend>
          <input
            onBlur={() => {setEmailIsTouched(true)}}
            aria-invalid={((!emailValid && emailValue) && emailIsTouched ) ? 'true' : undefined}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEmailValue(event.target.value); checkValidityEmail(emailValue, setEmailValid)}}
            value={emailValue}
            type='email'
            placeholder='Email address'
          />
          <legend>Shipping info</legend>
          <input
            onBlur={() => {setNameIsTouched(true)}}
            aria-invalid={((!nameValid && nameValue) && nameIsTouched ) ? 'true' : undefined}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNameValue(event.target.value); checkValidityText(nameValue, setNameValid, 'Name')}}
            value={nameValue}
            type='name'
            placeholder='Name'
          />
          <div className={styles.divideBox}>
            <input
              onBlur={() => {setCityIsTouched(true)}}
              aria-invalid={((!cityValid && cityValue) && cityIsTouched ) ? 'true' : undefined}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCityValue(event.target.value); checkValidityText(cityValue, setCityValid, 'City')}}
              value={cityValue}
              type='text'
              placeholder='City'
            />
            <input
              onBlur={() => {setCountryIsTouched(true)}}
              aria-invalid={((!countryValid && countryValue) && countryIsTouched ) ? 'true' : undefined}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCountryValue(event.target.value); checkValidityText(countryValue, setCountryValid, 'Country')}}
              value={countryValue}
              type='text'
              placeholder='Country'
            />
          </div>
          <input
            onBlur={() => {setPhoneIsTouched(true)}}
            aria-invalid={((!phoneValid && phoneValue) && phoneIsTouched ) ? 'true' : undefined}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setPhoneValue(event.target.value); checkValidityPhone(phoneValue, setPhoneValid)}}
            value={phoneValue}
            type='text'
            placeholder='Phone Number'
          />
          <button onClick={() => {checkIsFormValid(); setIsSubmitted(true)}} type="submit" className={styles.btn}>Place Your Order</button>
      </div>
    </div>
  );
}