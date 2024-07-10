import './MenuBarUser.css'
import avatar from '../../icons/viperr.jpeg'
import edit from '../../icons/edit.png'
import { useRef, useState } from 'react'

export default function MenuBarUser(){
    const[isHovered, setIsHovered] = useState<boolean>(false)
    const[editing, setEditing] = useState<number|null>(null)

    const nameRef = useRef<any>(null)
    const specialNameRef = useRef<any>(null)

    // const [nameHeight,setNameHeight] = useState<number>(nameRef.current?.scrollHeight)


    return(
        <>
            <div className='MenuBarUser_container'>
                <div className='MenuBarUser_avatar'>
                    <img src={avatar} alt='user avatar' className='MenuBarUser_avatar_icon'></img>
                    <div className={isHovered ? 'MenuBarUser_mask mask_active' : 'MenuBarUser_mask'}>
                        <img src={edit} alt="edit avatar" className={isHovered ? 'MenuBarUser_edit_icon_active' : 'MenuBarUser_edit_icon'}/>
                    </div>
                    <label htmlFor="avatar" className='MenuBarUser_avatar_input' 
                    onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}></label>
                    <input type="file" id='avatar' accept='image/*'/>
                </div>
                <div className='MenuBarUser_name' onClick={()=>setEditing(1)} ref={nameRef}>
                    {editing === 1 ? 
                    <input type='text' className={editing ? 'MenuBarUser_name_input' : 'MenuBarUser_name_input input_hidden'} id='name_input'
                    style={{height: `${nameRef.current?.scrollHeight-1}px`}}
                    placeholder='Введите новое имя' autoComplete='off' maxLength={16}/> :
                    <div>Yaotone</div>}

                    {!(editing === 1) && 
                    <div className='edit_popup' >
                        <div className='edit_popup_triangle'></div>
                        <img src={edit} alt="edit name" className='MenuBarUser_edit_name'/>
                    </div>}
                </div>
                <div className='MenuBarUser_special_name' onClick={()=>setEditing(2)} ref={specialNameRef}>
                    {editing === 2 ? 
                    <input type="text" className='MenuBarUser_name_input' id='special_name_input'
                    style={{height: `${specialNameRef.current?.offsetHeight-1}px`}}
                    placeholder='Введите новый псевдоним' autoComplete='off' maxLength={25}/> : 
                    <div>@blessed_yaotone</div>}

                    {!(editing === 2) && <div className='edit_popup'>
                        <div className='edit_popup_triangle'></div>
                        <img src={edit} alt="edit special name" className='MenuBarUser_edit_name'/>
                    </div>}
                </div>
                <div className={editing === null ? 'MenuBarUser_change_buttons change_buttons_hidden' : 'MenuBarUser_change_buttons'}>
                    <div>
                        <div className='MenuBarUser_change_button' id='cancel' onClick={()=>setEditing(null)}>Отменить</div>
                        <div className='MenuBarUser_change_button_horizontal'></div>
                    </div>
                    <div>
                        <div className='MenuBarUser_change_button' id='submit'>Применить</div>
                        <div className='MenuBarUser_change_button_horizontal'></div>
                    </div>
                </div>
            </div>
        </>
    )
}