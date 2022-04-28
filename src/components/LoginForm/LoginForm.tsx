import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './loginform.module.scss'
import validationLoginSchema from '../../validations/validationLogin';
import { setLogged } from '../../store/login/action';
import ReactDOM from 'react-dom';

interface IProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>,
  mode: String
}

interface ISubmit {
  values: {
    username: string;
    password: string;
  },
  setSubmitting: (isSubmitting: boolean) => void
}


export function LoginForm({ setShowLogin, mode }: IProps) {
  const dispatch = useDispatch()
  const refDiv = useRef<HTMLDivElement>(null)
  const refDiv2 = useRef<HTMLDivElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === refDiv.current || event.target === refDiv2.current) {
      setShowLogin(false)
    }
  }

  const handleLogin = async ({values, setSubmitting }: ISubmit) => {
    setSubmitting(true)

    try {

      const response = await fetch('/api/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      
      })

      if (response.status === 200) {
        setSubmitting(false)
        dispatch(setLogged(true))
        setShowLogin(false)
        // const notes = await getNotes()
        // dispatchNotes(notes, dispatch)
      } else {
        setSubmitting(false)
        dispatch(setLogged(false))
        response.text().then(text => {throw new Error(text)})
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleSignup = async ({values, setSubmitting }: ISubmit) => {
    setSubmitting(true)

    try {

      const response = await fetch('/api/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      
      })

      if (response.status === 200) {
        setSubmitting(false)
        dispatch(setLogged(true))
        setShowLogin(false)
      } else {
        setSubmitting(false)
        dispatch(setLogged(false))
        response.text().then(text => {throw new Error(text)})
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.code === 'Escape') setShowLogin(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  })

  return ReactDOM.createPortal(
    <div className={styles.container} onClick={handleClick} ref={refDiv}>
      <div className={styles.container2} ref={refDiv2}>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}

          validationSchema={validationLoginSchema}

          onSubmit={(values, { setSubmitting }) => {
            if (mode === 'login') handleLogin({values, setSubmitting})
            else if (mode === 'signup') handleSignup({values, setSubmitting})
            else throw new Error('Wrong mode value')
          }}
        >
          {({ errors }) => (
            <Form className={styles.containerForm}>
              <Field className={styles.formField} error={errors.username} placeholder="Username" name="username" type="text" />
              <div className={styles.errorStyled} >
                <ErrorMessage name="username" />
              </div>
              
              <Field className={styles.formField} error={errors.password} placeholder="Password" name="password" type="password"/>
              <div className={styles.errorStyled} >
                <ErrorMessage name="password" />
              </div>

              <button className={styles.stlBtn} type="submit">Submit</button>
            </Form>
          )}

        </Formik>
      </div>
    </div>,
    document.body
  );
}


