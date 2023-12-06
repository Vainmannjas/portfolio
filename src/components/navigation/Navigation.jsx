import { NavLink } from 'react-router-dom'

import BtnDarkMode from '../btnDarkMode/BtnDarkMode'

import './Navigation.scss'


const Navigation = () => {

	const activeLink = 'nav-list__link nav-list__link--active'
	const notActiveLink = 'nav-list__link'


  return (
	<nav className="nav">
		<div className="container">
			<div className="nav-row">

				<NavLink to="/" className="logo">
					<strong>Freelancer</strong> portfolio
				</NavLink>

				<BtnDarkMode/>

				<ul className="nav-list">

					<li className="nav-list__item">
						<NavLink to="/" 
								 className={({isActive}) => isActive ? activeLink : notActiveLink}>
							Home
						</NavLink>
					</li>

					<li className="nav-list__item">
						<NavLink to="/projects" 
								 className={({isActive}) => isActive ? activeLink : notActiveLink}>
							Projects
						</NavLink>
					</li>
					
					<li className="nav-list__item">
						<NavLink to="/contacts" 
								 className={({isActive}) => isActive ? activeLink : notActiveLink}>
							Contacts
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  )
}

export default Navigation
