import './Main.css'
import MainFooter from './MainFooter/MainFooter'
import MainHeader from './MainHeader/MainHeader'
import MassagesContainer from './Massages/MassagesContainer'

interface IMain{
    setIsUserInfoShown: Function,
    activeChat: number,
    setActiveChat: Function
}

export default function Main({setIsUserInfoShown, activeChat, setActiveChat}:IMain){

    return(
        <div className={activeChat === -1 ? 'Main_container' : 'Main_container Main_container_active'}>
            <MainHeader setIsUserInfoShown={setIsUserInfoShown}></MainHeader>
            <MassagesContainer></MassagesContainer>
            <MainFooter></MainFooter>
        </div>
    )
}