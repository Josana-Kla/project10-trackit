import axios from "axios";

export const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function getLocalToken() {
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    };
  
    return config;
}

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function signIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function createHabit(body) {
    const config = getLocalToken();
    const promise = axios.post(`${BASE_URL}/habits`, body, config);
    return promise;
}

function listHabits() {
    const config = getLocalToken();
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function deleteHabit(habitId) {
    const config = getLocalToken();
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config);
    return promise;
}

function getTodayHabits() {
    const config = getLocalToken();
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
    return promise;
}

function markHabitDone(habitId) {
    const config = getLocalToken();
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, '', config);
    return promise;
}

function unmarkHabitDone(habitId) {
    const config = getLocalToken();
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, '', config);
    return promise;
}

function listHabitsHistory() {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`);
    return promise;
}


export { signUp, signIn, createHabit, listHabits, deleteHabit, getTodayHabits, markHabitDone, unmarkHabitDone, listHabitsHistory }
