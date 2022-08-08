import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from "react"

import FooterStyle from './FooterStyle';
import ProgressDayContext from "../contexts/ProgressDay";

export default function Footer() {
    const navigate = useNavigate();
    const { percentageDone } = useContext(ProgressDayContext);
    
    return(
        <FooterStyle>
            <Link to="/habitos">Hábitos</Link>
            <div onClick={() => navigate("/hoje")} style={{ width: 91, height: 91 }} >
                <CircularProgressbar onClick={() => navigate("/hoje")} text="Hoje" value={percentageDone} background backgroundPadding={5}
                styles={buildStyles({
                    backgroundColor: '#52B6FF',
                    textColor: '#FFFFFF',
                    pathColor: `rgba(255, 255, 255, ${percentageDone / 100})`,
                    trailColor: 'transparent'
                    })} 
                />
            </div>
            <Link to="/historico">Histórico</Link>
        </FooterStyle>
    )
}