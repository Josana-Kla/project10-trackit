import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    const percentage = 70;
    return(
        <footer>
            <div onClick={() => navigate("/hoje")} style={{ width: 200, height: 200, }} >
                <CircularProgressbar onClick={() => navigate("/hoje")} text="Hoje" value={percentage} background backgroundPadding={5}
                styles={buildStyles({
                    backgroundColor: '#52B6FF',
                    textColor: '#FFFFFF',
                    pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                    trailColor: 'transparent'
                    })} 
                />
            </div>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/historico">Histórico</Link>
        </footer>
    )
}