import { useLocation } from 'react-router-dom';

const Navigation = () => {
	const location = useLocation();
	
	return (
		<nav>
			<ul>
				<li className={location.pathname === '/' ? 'active' : ''}>Home</li>
				<li className={location.pathname === '/about' ? 'active' : ''}>About</li>
				<li className={location.pathname === '/contact' ? 'active' : ''}>Contact</li>
				{/* ...existing code... */}
			</ul>
		</nav>
	);
};

export default Navigation;