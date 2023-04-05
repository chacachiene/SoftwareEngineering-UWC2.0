import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Wrapper.module.css";
import { Icons } from "../../constants/icons";
import ButtonContainer from "../../components/ui/buttons/ButtonContainer";
import { Images } from "../../constants/images";
//something here
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../actions/authAction";

const Wrapper = ({ children, header }) => {
  const [displayNotifi, setDisplayNotifi] = useState(true);
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
    <Container>
      <div className={[styles.wrapper]}>
        <Row>
          <div className={styles.header}>
            <Col xl={7} md={6} sm={6}>
              <img src={Images.logoImg} alt="" />
              <div className={styles.logo}></div>
            </Col>
            <Col xl={1} md={1} className="d-md-none  d-lg-block d-none">
              <div className={styles.notification}>
                <ButtonContainer size="64px" color="#c6c9c4">
                  <Icons.IoNotifications size={36} />
                </ButtonContainer>
                {displayNotifi && (
                  <span className={styles.notiCount}>
                    {header.notifications}
                  </span>
                )}
              </div>
            </Col>

            <Col xl={1} md={1} className="d-md-none  d-lg-block d-none">
              <div className={styles.message}>
                <ButtonContainer size="64px" color="#c6c9c4">
                  <Icons.BsChat size={36} />
                </ButtonContainer>
                {displayNotifi && (
                  <span className={styles.msgCount}>{header.messages}</span>
                )}
              </div>
            </Col>

            <Col xl={3} md={4} sm={6}>
              <div className={styles.personal}>
                <div className={styles.avatarPersonal}></div>
                <div className={styles.username}>{header.username}</div>
                {/* <div className={styles.optionPersonal} onClick={optionHandler}>
          <Icons.BsList />
          {displayMenuOptions && <OptionsMenu options={options}/>}
        </div> */}
              </div>
            </Col>
          </div>
        </Row>
        {children}

        <div className={styles.navbar}>

        <Link to="/"  >
          <div className={styles.navItem}>
            <Icons.MdDashboard size={50} />
          </div>
				</Link>

        <Link to="/tasks" >
          <div className={styles.navItem}>
            <Icons.BiDetail size={50} />
          </div>
				</Link>
        
        <Link to="/map" >
          <div className={styles.navItem}>
            <Icons.GrMapLocation size={50} />
          </div>
				</Link>

        <Link to="/trucks" >
          <div className={styles.navItem}>
            <Icons.GiMineTruck size={50} />
          </div>
        </Link>
        <Link to="/users">
          <div className={styles.navItem}>
            <Icons.BsPeopleFill size={50} />
          </div>
        </Link>
          
        <Link to="/auth">
          <div className={styles.navItem}>
              <Icons.RiLogoutBoxLine size={50} />
          </div>
        </Link>
          
         
        </div>
      </div>
    </Container>
  );
};

export default Wrapper;
