import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Habits from "./pages/habits/Habits";
import TodayHabits from "./pages/today-habits/TodayHabits";
import HabitsHistory from "./pages/habits-history/HabitsHistory";
import Header from './components/Header';
import Footer from './components/Footer';

import PrivatePage from './PrivatePage';
import { AuthProvider } from './contexts/Auth';
import ProgressDayContext from './contexts/ProgressDay';
import UserDatas from './contexts/UserDatas';

export default function App() {
    const [ userDatas, setUserDatas ] = useState({});
    const [ percentageDone, setPercentageDone ] = useState({});

    return (
        <BrowserRouter>
            <AuthProvider>
                <UserDatas.Provider value={{ userDatas, setUserDatas }}>
                    <ProgressDayContext.Provider value={{ percentageDone, setPercentageDone }}>
                        <Routes>
                            <Route path="/" element={<SignIn />} /> 
                            <Route path="/cadastro" element={<SignUp />} />
                            
                                <Route 
                                path="/habitos" 
                                element={
                                    <PrivatePage>
                                        <Header />
                                        <Habits />
                                        <Footer />
                                    </PrivatePage>
                                    }
                                />

                                <Route 
                                path="/hoje" 
                                element={
                                    <PrivatePage>
                                        <Header />
                                        <TodayHabits />
                                        <Footer />
                                    </PrivatePage>
                                    } 
                                />

                                <Route 
                                path="/historico" 
                                element={
                                    <PrivatePage>
                                        <Header />
                                        <HabitsHistory />
                                        <Footer />
                                    </PrivatePage>
                                    } 
                                />
                        </Routes>
                    </ProgressDayContext.Provider>
                </UserDatas.Provider>
            </AuthProvider>
        </BrowserRouter>
    )
}