import { useContext } from "react";
import UserDatas from "../contexts/UserDatas";

export default function Header() {
    const { userDatas, setUserDatas } = useContext(UserDatas);
    console.log(userDatas)
    return(
        <header>
            <img src="../../../assets/img/small-logo.svg" alt="small-logo" />
            <img src={userDatas.image} alt="profile" />
        </header>
    )
}