import './MenuBarUser.css'
import avatar from '../../icons/viperr.jpeg'
import edit from '../../icons/edit.png'
import { useState } from 'react'

export default function MenuBarUser(){
    const[isHovered, setIsHovered] = useState<boolean>(false)

    return(
        <>
            <div className='MenuBarUser_container'>
                <div className='MenuBarUser_avatar'>
                    <img src={avatar} alt='user avatar' className='MenuBarUser_avatar_icon'></img>
                    <div className='MenuBarUser_mask' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                        <img src={edit} alt="edit avatar" className={isHovered ? 'MenuBarUser_edit_icon_active' : 'MenuBarUser_edit_icon'}/>
                    </div>
                </div>
                <div className='MenuBarUser_name'>
                    Yaotone
                    <div className='edit_popup' >
                        <div className='edit_popup_triangle'></div>
                        <img src={edit} alt="edit name" className='MenuBarUser_edit_name'/>
                    </div>
                </div>
                <div className='MenuBarUser_special_name'>
                    @blessed_yaotone
                    <div className='edit_popup'>
                        <div className='edit_popup_triangle'></div>
                        <img src={edit} alt="edit special name" className='MenuBarUser_edit_name'/>
                    </div>
                </div>
            </div>
        </>
    )
}