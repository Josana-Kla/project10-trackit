import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function signIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function createTask(body) {
    const promise = axios.post(`${BASE_URL}/habits`, body);
    return promise;
}

function listHabits() {
    const promise = axios.get(`${BASE_URL}/habits`);
    return promise;
}

function deleteHabit() {
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`);
    return promise;
}

function searchTodayHabits() {
    const promise = axios.get(`${BASE_URL}/habits/today`);
    return promise;
}

function markHabitDone() {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`);
    return promise;
}

function unmarkHabitDone() {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`);
    return promise;
}

function listHabitsHistory() {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`);
    return promise;
}


export { signUp, signIn, createTask, listHabits, deleteHabit, searchTodayHabits, markHabitDone, unmarkHabitDone, listHabitsHistory }
