import { useContext } from "react";
import UserDatas from "../contexts/UserDatas";
import HeaderStyle from "../components/HeaderStyle";

export default function Header() {
    const { userDatas, setUserDatas } = useContext(UserDatas);
    return(
        <HeaderStyle>
            <img src="../../../assets/img/small-logo.svg" alt="small-logo" />
            <img src={userDatas.image} alt="profile" />
        </HeaderStyle>
    )
}