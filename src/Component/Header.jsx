import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import ImageN from "../Asset/Nletter.jpeg";
import "../Style/Header.scss";
import {BsSearch,BsBell} from 'react-icons/bs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function Header() {
  const navigate = useNavigate();
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in'
  })
  const [hideHeader,setHideHeader] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(true)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y,'current scroll y')
      console.log(prevPos.y, ' prev pos y')
      if(currPos.y < -350){
        console.log('masuk ke if')
        setHideHeader(true)
      }else {
        setHideHeader(false)
      }
    },
    [hideOnScroll],
    false,
    false,
    300
  )  
  return (
    <>
      <div className="container-header">
        <div className="header-top" show={hideOnScroll.toString()}>
          <div className="menu-top-left">
            <div className="navbar-brand" onClick={() => navigate("/")}>
              <img src={ImageN} alt="" />
              <p>ANOTIA</p>
            </div>
            <div className="card-header active">NEWS</div>
            <div className="card-header">JOBS</div>
            <div className="card-header">DATABASE</div>
            <div className="card-header">EVENTS</div>
            <div className="card-header">SCHOOL</div>
            <div className="card-header">ABOUT</div>
            <div className="card-header">ADVERTISE</div>
          </div>
          <div className="menu-top-right">
            <div className="searching-card">
                <BsSearch className="search-icon"/>
            </div>
            <BsBell className="bell-icon"/>
            <div className="profile-card">
              <div className="profile-rounded">
                <img src={ImageN} alt="" />
              </div>
              BASIC
            </div>

          </div>
        </div>
        <div className="header-bottom">
          <div className="bottom-left">
            <div className="header-left-card">
              PREMIUM
            </div>
            <div className="header-left-card">
              VISUALS
            </div>
            <div className="header-left-card">
              VIDEOS
            </div>
            <div className="header-left-card">
              NEWSLETTERS
            </div>
            <div className="header-left-card">
              CATEGORIES
            </div>
            <div className="header-left-card">
              MARKET
            </div>
          </div>
          <div className="bottom-right">
            <div className="subscribe-card">
              SUBSCRIBE
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
