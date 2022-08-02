import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-in/SignUp";
import Habits from "./pages/sign-in/Habits";
import TodayHabits from "./pages/sign-in/TodayHabits";
import HabitsHistory from "./pages/sign-in/HabitsHistory";

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