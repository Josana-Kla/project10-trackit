import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Habits from "./pages/habits/Habits";
import TodayHabits from "./pages/today-habits/TodayHabits";
import HabitsHistory from "./pages/habits-history/HabitsHistory";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} /> 
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/habitos" element={<Habits />} />
                <Route path="/hoje" element={<TodayHabits />} />
                <Route path="/historico" element={<HabitsHistory />} />
            </Routes>
        </BrowserRouter>
    )
}