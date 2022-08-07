import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import ProgressDayContext from "../contexts/ProgressDay";

export default function Footer() {
    const navigate = useNavigate();
    const { percentageDone } = useContext(ProgressDayContext);
    
    return(
        <footer>
            <div onClick={() => navigate("/hoje")} style={{ width: 200, height: 200, }} >
                <CircularProgressbar onClick={() => navigate("/hoje")} text="Hoje" value={percentageDone} background backgroundPadding={5}
                styles={buildStyles({
                    backgroundColor: '#52B6FF',
                    textColor: '#FFFFFF',
                    pathColor: `rgba(255, 255, 255, ${percentageDone / 100})`,
                    trailColor: 'transparent'
                    })} 
                />
            </div>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/historico">Histórico</Link>
        </footer>
    )
}