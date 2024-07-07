import './SidebarUser.css'
import avatar from '../../icons/viperr.jpeg'

export default function SidebarUser(){

    return(
        <div className='SidebarUser_container'>
            <div className='SidebarUser_avatar' style={{backgroundImage: `url(${avatar})`}}></div>
            <div className='SidebarUser_info'>
                <div className='SidebarUser_data'>
                    <div className='Sidebar_username'>Yaotone</div>
                    <div className='Sidebar_date'>21.02.2024</div>
                </div>
                <div className='Sidebar_last_message'>Привет нашел вчера такое</div>
            </div>
        </div>
    )
}