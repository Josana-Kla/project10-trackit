import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    return(
        <footer>

            <div style={{ width: 200, height: 200, }} >
                <CircularProgressbar value={66} />
            </div>
            <h2>Hábitos</h2>
            <h2>Histórico</h2>
        </footer>
    )
}