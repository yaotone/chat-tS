import './Main.css'
import MainFooter from './MainFooter/MainFooter'
import MainHeader from './MainHeader/MainHeader'
import MassagesContainer from './Massages/MassagesContainer'

interface IMain{
    setIsUserInfoShown: Function
}

export default function Main({setIsUserInfoShown}:IMain){

    return(
        <div className='Main_container'>
            <MainHeader setIsUserInfoShown={setIsUserInfoShown}></MainHeader>
            <MassagesContainer></MassagesContainer>
            <MainFooter></MainFooter>
        </div>
    )
}