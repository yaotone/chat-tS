import './Main.css'
import MainHeader from './MainHeader/MainHeader'

interface IMain{
    setIsUserInfoShown: Function
}

export default function Main({setIsUserInfoShown}:IMain){

    return(
        <div className='Main_container'>
            <MainHeader setIsUserInfoShown={setIsUserInfoShown}></MainHeader>
        </div>
    )
}