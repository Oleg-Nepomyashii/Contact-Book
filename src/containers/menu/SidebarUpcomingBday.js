import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';
import shortid from 'shortid'

import Title from '../../components/Title';

const style = StyleSheet.create({
	upcoming_bday: {
		margin: '20px 5.31% 0 4.38%'
	},
	upcoming_title: {
		fontSize: '16px',
		lineHeight: '16px',
		letterSpacing: '1.86667px',
		color: '#D9D2C6',
		fontWeight: 'normal',
		margin: '0'
	},
	upcoming_bday_inner: {
		marginTop: '28px',
		maxHeight: '84px',
		overflow: 'auto',
	},
	upcoming_card: {
		display: 'flex',
		justifyContent: 'space-between',
		"&:not(:first-child)": {
			marginTop: '20px'
		}
	},
	user_card: {
		width: '68%'
	},
	upcoming_card_title: {
		margin: '0',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		fontWeight: 'normal',
		lineHeight: '16px',
		color: '#FFFFFF',
		opacity: '0.5',
	},
	age: {
		margin: '1px 0 0',
		fontSize: '12px',
		color: '#FFFFFF',
		opacity: '0.5',
	},
	bday_date: {
		margin: '0 0 0 4px',
		lineHeight: '16px',
		color: '#FFFFFF',
		opacity: '0.5'
	}


})

const SidebarUpcomingBday = () => {
	const ololo = [
		{name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		{name:'Вячеслав Константинович', age: 44 , date: "23.09.2019", id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019", id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()},
		// {name:'Александр Иванов', age: 30 , date: "20.09.2019" , id: shortid()}
	]

	return(
		<section className={classNames(css(style.upcoming_bday))}>
			<Title tag="h2" text="UPCOMING BIRTHDAY" className={classNames(css(style.upcoming_title))}/>
			<div className={classNames(css(style.upcoming_bday_inner))}>
				{
					ololo.map(item => {
						return (
							<div  key={item.id}  className={classNames(css(style.upcoming_card))}>
								<div className={classNames(css(style.user_card))}>
									<Title  tag="h3" text={item.name} className={classNames(css(style.upcoming_card_title))} />
									<p className={classNames(css(style.age))}>
										<span className={classNames(css(style.age_number))} >{item.age} years</span>
									</p>	
								</div>
								<p className={classNames(css(style.bday_date))}>{item.date}</p>
							</div>	
						)	
					})
				}
			</div>
		</section>
	)
}

export default SidebarUpcomingBday