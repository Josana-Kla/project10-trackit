import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Habits from "./pages/habits/Habits";
import TodayHabits from "./pages/today-habits/TodayHabits";
import HabitsHistory from "./pages/habits-history/HabitsHistory";
import PrivatePage from './PrivatePage';
import ProgressDayContext from './contexts/ProgressDay';
import { useState } from 'react';

export default function App() {
    const [ percentageDone, setPercentageDone ] = useState([]);

    return (
        <BrowserRouter>
            <AuthProvider>
                <ProgressDayContext.Provider value={{ percentageDone, setPercentageDone }}>
                    <Routes>
                        <Route path="/" element={<SignIn />} /> 
                        <Route path="/cadastro" element={<SignUp />} />
                        
                            <Route 
                            path="/habitos" 
                            element={
                                <PrivatePage>
                                    <Habits />
                                </PrivatePage>
                                }
                            />

                            <Route 
                            path="/hoje" 
                            element={
                                <PrivatePage>
                                    <TodayHabits />
                                </PrivatePage>
                                } 
                            />

                            <Route 
                            path="/historico" 
                            element={
                                <PrivatePage>
                                    <HabitsHistory />
                                </PrivatePage>
                                } 
                            />
                    </Routes>
                </ProgressDayContext.Provider>
            </AuthProvider>
        </BrowserRouter>
    )
}