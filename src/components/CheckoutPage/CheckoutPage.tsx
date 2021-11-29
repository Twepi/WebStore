import React, { ReactChild, SetStateAction, useRef, useState } from 'react';
import { OrderSummary } from '../OrderSummary';
import styles from './checkoutpage.module.scss'

let errors: string[] = []

export function CheckoutPage() {
  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [nameValue, setNameValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [countryValue, setCountryValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  const [nameIsTouched, setNameIsTouched] = useState(false)
  const [cityIsTouched, setCityIsTouched] = useState(false)
  const [countryIsTouched, setCountryIsTouched] = useState(false)
  const [phoneIsTouched, setPhoneIsTouched] = useState(false)

  const [nameValid, setNameValid] = useState(false)
  const [cityValid, setCityValid] = useState(false)
  const [countryValid, setCountryValid] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)

  const [nameError, setNameError] = useState<Set<string>>(new Set())
  const [cityError, setCityError] = useState<Set<string>>(new Set())
  const [countryError, setCountryError] = useState<Set<string>>(new Set())
  const [phoneError, setPhoneError] = useState<Set<string>>(new Set())


  const checkValidityName = (str: string, setValid: React.Dispatch<SetStateAction<boolean>>) => {
    if (/\d/.test(str)) {
      setNameError(nameError.add("Name can't contain numbers"))
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const checkValidityCity = (str: string, setValid: React.Dispatch<SetStateAction<boolean>>) => {
    if (/\d/.test(str)) {
      setCityError(cityError.add("City can't contain numbers"))
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const checkValidityCountry = (str: string, setValid: React.Dispatch<SetStateAction<boolean>>) => {
    if (/\d/.test(str)) {
      setCountryError(countryError.add("Country can't contain numbers"))
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const checkValidityPhone = (str: string, setValid: React.Dispatch<SetStateAction<boolean>>) => {
    if (/[a-zA-Z]/g.test(str)) {
      setPhoneError(phoneError.add("Phone can't contain letters"))
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const checkEmptyField = () => {
    if (nameValue === '') {
      setNameError(nameError.add("Name field is required"))
      setNameValid(false)
    }
    if (cityValue === '') {
      setCityError(cityError.add("City field is required"))
      setCityValid(false)
    }
    if (countryValue === '') {
      setCountryError(countryError.add("Country field is required"))
      setCountryValid(false)
    }
    if (phoneValue === '') {
      setPhoneError(phoneError.add("Phone field is required"))
      setPhoneValid(false)
    }
  }

  const purgeErrors = () => {
    setNameError(new Set())
    setCityError(new Set())
    setCountryError(new Set())
    setPhoneError(new Set())
  }

  const updateAllValues = (event: React.FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    setNameValue(event.target.name.value)
    // @ts-ignore
    setCityValue(event.target.city.value)
    // @ts-ignore
    setCountryValue(event.target.country.value)
    // @ts-ignore
    setPhoneValue(event.target.phone.value)
  }
  
  const checkValidityBeforeSubmit = () => {
    checkValidityName(nameValue, setNameValid)
    checkValidityCity(cityValue, setCityValid)
    checkValidityCountry(countryValue, setCountryValid)
    checkValidityPhone(phoneValue, setPhoneValid)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    errors = []

    updateAllValues(event)
    checkValidityBeforeSubmit()
    checkEmptyField() 

    let valid = nameValid && cityValid && countryValid && phoneValid
    setIsFormValid(valid)

    for (let value of [...nameError, ...cityError, ...countryError, ...phoneError]) {
      errors.push(value)
    }

    purgeErrors()
  }


  return (
    <div className={styles.container}>
      <form onSubmit={(event) => {handleSubmit(event); setIsSubmitted(true)}} className={styles.formContainer}>
        <h2>checkout</h2>
        {!isFormValid && isSubmitted && (
          <div className={styles.errorMessage}>
            {errors.map((value, index) => (
              <div key={index}>{value}</div>
            ))}
          </div>
        )}
        {isFormValid && isSubmitted && (
          <div className={styles.successMessage}>
            Your order was successfully submitted!
          </div>
        )}
          <legend>Contact info</legend>
          <input
            name='name'
            onBlur={() => {setNameIsTouched(true)}}
            aria-invalid={((!nameValid && nameValue) && nameIsTouched ) ? 'true' : undefined}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNameValue(event.target.value); checkValidityName(nameValue, setNameValid)}}
            value={nameValue}
            type='text'
            placeholder='Name'
          />
          <div className={styles.divideBox}>
            <input
              name='city'
              onBlur={() => {setCityIsTouched(true)}}
              aria-invalid={((!cityValid && cityValue) && cityIsTouched ) ? 'true' : undefined}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCityValue(event.target.value); checkValidityCity(cityValue, setCityValid)}}
              value={cityValue}
              type='text'
              placeholder='City'
            />
            <input
              name='country'
              onBlur={() => {setCountryIsTouched(true)}}
              aria-invalid={((!countryValid && countryValue) && countryIsTouched ) ? 'true' : undefined}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCountryValue(event.target.value); checkValidityCountry(countryValue, setCountryValid)}}
              value={countryValue}
              type='text'
              placeholder='Country'
            />
          </div>
          <input
            name='phone'
            onBlur={() => {setPhoneIsTouched(true)}}
            aria-invalid={((!phoneValid && phoneValue) && phoneIsTouched ) ? 'true' : undefined}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setPhoneValue(event.target.value); checkValidityPhone(phoneValue, setPhoneValid)}}
            value={phoneValue}
            type='text'
            placeholder='Phone Number'
          />
          <button type="submit" className={styles.btn}>Place Your Order</button>
      </form>

      <OrderSummary />
    </div>
  );
}