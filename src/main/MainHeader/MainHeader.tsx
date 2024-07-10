import './MainHeader.css'
import avatar from '../../icons/viperr.jpeg'

interface IMainHeader{
    setIsUserInfoShown: Function
}

export default function MainHeader({ setIsUserInfoShown}:IMainHeader){

    return(
        <>
        <div className='MainHeader_container'>
            <div className='MainHeader_user' onClick={()=>setIsUserInfoShown(true)}>
                <div className='MainHeader_avatar' style={{backgroundImage: `url(${avatar})`}}></div>
                <div className='MainHeader_user_info'>
                    <div className='MainHeader_name'>Димас Барабас</div>
                    <div className='MainHeader_last_visit'>Был(а) 6 минут назад</div>
                </div>
            </div>
        </div>
        </>
    )
}