import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import Title from '../../components/Title';

const style = StyleSheet.create({
	logWrapper: {
		minWidth: '320px',
		maxWidth: '640px',
		height: '100vh',
		background: 'linear-gradient(0deg, #344652 0%, #101F2A 100%)',
		margin: 'auto',
	},
	sidebar_title: {
		fontSize: '24px',
		lineHeight: '24px',
		margin: '0',
		color: '#EFEBE4',
		fontWeight: 'normal',
		textAlign: 'center',
		paddingTop: '16px'
	},
	registerForm: {
		display: 'flex',
		flexDirection: 'column',
		width: '90%',
		margin: '20px 5%',
		justifyContent: 'space-between',
		border: '2px solid #FFB143'
	},
	registerSection: {
		paddingLeft: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		color: 'white'
	},
	submit_btn: {
		width: '150px',
		height: '40px',
		borderRadius: '20px',
		margin: '10px calc(50% - 75px)',
		border: 'transparent',
		backgroundColor: '#FFB143'
	},
	input: {
		height: '30px',
		width: '70%'
	},
	LogIn: {
		display: 'flex',
		flexDirection: 'column',
		width: '90%',
		margin: '20px 5%',
		justifyContent: 'space-between',
		border: '2px solid #FFB143'
	}

})

const Login = (props) => {
	return (
		<div className={classNames(css(style.logWrapper))}>
			<Title tag='h1' text='Contact Book' className={classNames(css(style.sidebar_title))} />


			<form onSubmit={props.registration} className={classNames(css(style.registerForm))}>
				 <p className={classNames(css(style.registerSection))}>
			        <label htmlFor="name">Имя</label>
			        <input className={classNames(css(style.input))} type="text" name="name" id="name" required placeholder="Ваше имя.... от 2 символов" minLength="2" maxLength="256"/>
        		</p>
        		 <p className={classNames(css(style.registerSection))}>
          			<label htmlFor="second_name">Фамилия</label>
         			<input className={classNames(css(style.input))} type="text" name="surname" id="second_name" required placeholder="Фамилия ... от 2 символов" minLength="2" maxLength="256"/>
        		</p>
        		<p className={classNames(css(style.registerSection))}>
         		 	<label htmlFor="Email">Эл. почта</label>
          			<input className={classNames(css(style.input))} type="Email" name="email" id="Email" required placeholder="example@post.com" minLength="4" maxLength="70"/>
        		</p>

        		<p className={classNames(css(style.registerSection))}>
         			<label htmlFor="Password">Пароль</label>
         		 	<input className={classNames(css(style.input))} type="password" name="password" id="Password" required placeholder="от 4 до 10 символов" minLength="4" maxLength="256"/>
        		</p>
        		<button className={classNames(css(style.submit_btn))} >Зарегистрироваться</button>
			</form>



			<form onSubmit={props.login} className={classNames(css(style.LogIn))}>
				<p className={classNames(css(style.registerSection))}>
         		 	<label htmlFor="EmailLogIn">Эл. почта</label>
          			<input className={classNames(css(style.input))} type="Email" name="email" id="EmailLogIn" required placeholder="example@post.com" minLength="4" maxLength="70"/>
        		</p>

        		<p className={classNames(css(style.registerSection))}>
         			<label htmlFor="PasswordLogIn">Пароль</label>
         		 	<input className={classNames(css(style.input))} type="password" name="password" id="PasswordLogIn" required placeholder="от 4 до 10 символов" minLength="4" maxLength="256"/>
        		</p>
        		<button className={classNames(css(style.submit_btn))}>Войти</button>
			</form>
		</div>
	)
}

export default Login