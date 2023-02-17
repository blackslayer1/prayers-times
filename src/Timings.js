import { useEffect, useState } from 'react'
import './Timings.css'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Timings = ({ fajr, dhuhr, asr, maghrib, isha }) => {

  const [notificationOn, setNotificationOn] = useState(false);

  const notification = (e) =>{
    if(notificationOn!=true){
      setNotificationOn(true);
      e.target.style.color="black"
      } else {
      setNotificationOn(false);
    e.target.style.color="gray"
    }
  }






  return (
    <div className='container3'>
      <div className="container4">
        <div className="times"><span style={{marginLeft: "10px"}}>Morning</span> <br/>{fajr}</div>
        <div className="times"><span>Afternoon</span> <br/>{dhuhr}</div>
        <div className="times"><span style={{marginLeft: "10px"}}>Evening</span> <br/>{asr}</div>
        <div className="times"><span style={{marginLeft: "10px"}}>Night</span> <br/>{maghrib}</div>
        <div className="times"><span style={{marginLeft: "10px"}}>Midnight</span> <br/>{isha}</div>
        <NotificationsIcon onClick={ notification } style={{color: 'gray', cursor: 'pointer'}} />
      </div>
    </div>
  )
}

export default Timings