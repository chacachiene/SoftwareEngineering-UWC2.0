import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../actions/authAction"

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;
	const dispatch = useDispatch();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const handleLogout = () => {
		dispatch( logout(navigate) );
		setUser(null);
	}
	useEffect( () => {
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);
	
    return (
	<>
	<div className="d-flex flex-column flex-shrink-0 p-3 border border-right border-primary" style={{width: "280px",height:"100vh", float:"left"}}>
		<a href="/" className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto fs-2">
			<i className="bi bi-truck me-1 text-primary"></i>
			<span>UWC Remake</span>
		</a>
		<hr/>
		<ul className="nav nav-pills flex-column mb-auto">
			<li className="nav-item">
				<Link to="/"  className={path=="/" ? "nav-link active" : "nav-link"}>
					<i className="bi bi-bar-chart me-3"></i>
					<span>Tổng quan</span>
				</Link>
			</li>
			<li>
				<button className="btn btn-toggle align-items-center rounded collapsed text-primary" data-bs-toggle="collapse" data-bs-target="#stuff-collapse">
					<i className="bi bi-briefcase me-3"></i>
					<span>Thiết bị</span>
				</button>
				<div id="stuff-collapse" className="collapse text-primary">
					<ul className="btn-toggle-nav list-unstyled pb-1 ms-3">
						<li><Link to="/users" className={path=="/users" ? "nav-link active" : "nav-link"}>Nhân viên</Link></li>
						<li><Link to="/trucks" className={path=="/trucks" ? "nav-link active" : "nav-link"}>Phương tiện</Link></li>
						<li><Link to="/mcps" className={path=="/mcps" ? "nav-link active" : "nav-link"}>MCP</Link></li>
					</ul>
				</div>
			</li>
			<li>
				<Link to="/tasks" className={path=="/tasks" ? "nav-link active" : "nav-link"}>
					<i className="bi bi-person me-3"></i>
					<span>Phân công</span>
				</Link>
			</li>
			<li>
				<Link to="/map" className={path=="/map" ? "nav-link active" : "nav-link"}>
					<i className="bi bi-map me-3"></i>
					<span>Bản đồ</span>
				</Link>
			</li>
            <li>
				<Link to="/chats" className={path=="/chats" ? "nav-link active" : "nav-link"}>
                <i className="bi bi-chat-right-text me-3"></i>
					<span>Tin nhắn</span>
				</Link>
			</li>
		</ul>
		<hr/>
		<ul className="nav nav-tabs flex-column text-muted mb-4">
			<li className="nav-item active">
				<a href="#" className="nav-link">
					<i className="bi bi-exclamation me-3"></i>
					<span>Trợ giúp</span>
				</a>
			</li>
			<li className="nav-item">
				<a href="#" className="nav-link">
					<i className="bi bi-chat-dots me-3"></i>
					<span>Liên hệ</span>
				</a>
			</li>
		</ul>
		<div className="container">
			{user  ? (<div className="dropdown">
				<div className="d-flex align-items-center text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown">
					<img src={user?.image} className="rounded-circle me-2" width="32" height="32"/>
					<strong>{user.name}</strong>					
				</div>
				<ul className="dropdown-menu text-small shadow">
					<li className="dropdown-item">
						<Link to="/auth" className="text-decoration-none">Change account</Link>
					</li>
					<li>
						<hr className="dropdown-divider"></hr>
					</li>
					<li className="dropdown-item" onClick={handleLogout}>Logout</li>
				</ul>
				</div> ) : (
				<Link to="/auth">
					<button className="btn btn-primary" role="button">Sign In</button>
				</Link>
				
			)}
			
			
    	</div>
	</div>
  
  
	</>
    )};

export default Navbar;