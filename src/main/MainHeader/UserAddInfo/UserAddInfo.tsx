import './UserAddInfo.css'
import avatar from '../../../icons/viperr.jpeg'
import edit from '../../../icons/edit.png'
import copy from '../../../icons/copy.png'
import complete from '../../../icons/complete.png'
import cancel from '../../../icons/cancel.png'
import block from '../../../icons/stop.png'
import deleteIcon from '../../../icons/delete.png'
import { useState, useRef } from 'react'

interface IAdditionalInfo{
    isUserInfoShown: boolean,
    setIsUserInfoShown: Function
}

export default function UserAddInfo({isUserInfoShown, setIsUserInfoShown}:IAdditionalInfo){
    const[isEditing, setIsEditing] = useState<boolean>(false);

    const nameRef = useRef<any>(null);

    function handleAdditionaInfoBackgroundClick(){
        setIsEditing(false)
        setIsUserInfoShown(false)
    }

    function copySpecialName(){
        navigator.clipboard.writeText('bloodyGamer2005')
    }

    function handleNameChange(){

    }

    return(
        isUserInfoShown ? <div className='UserAddInfo_background' onClick={handleAdditionaInfoBackgroundClick}>
            <div className='UserAddInfo_container' onClick={(event:React.MouseEvent)=>{event.stopPropagation()}}>
                <div className='UserAddInfo_avatar' style={{backgroundImage: `url(${avatar})`}}></div>
                <div className='UserAddInfo_name_container'>
                    {isEditing ? <input className='UserAddInfo_name_input' placeholder='Введите новое имя'
                    style={{height: `${nameRef.current.clientHeight-1.5}px`}}></input> : 
                    <div className='UserAddInfo_name' ref={nameRef}>Димас Барабас</div>}
                    {isEditing ? 
                    <>
                        <div className='UserAddInfo_action_icon' id='first_action_icon' style={{backgroundImage: `url(${complete})`}} onClick={handleNameChange}></div>
                        <div className='UserAddInfo_action_icon' id='second_action_icon' style={{backgroundImage: `url(${cancel})`}} onClick={()=>setIsEditing(false)}></div>
                    </>
                    : <div className='UserAddInfo_action_icon' style={{backgroundImage: `url(${edit})`}} onClick={()=>setIsEditing(true)}></div>}
                </div>
                <div className='UserAddInfo_special_name_container'>
                    <div className='UserAddInfo_special_name'>@bloodyGamer2005</div>
                    <div className='UserAddInfo_action_icon' 
                    style={{backgroundImage: `url(${copy})`}}
                    onClick={copySpecialName}
                    ></div>
                </div>

                <div className='UserAddInfo_button' id='UserAddInfo_delete'>
                    <img src={deleteIcon} alt="block icon" className='UserAddInfo_icon'/>
                    <div className='UserAddInfo_button_text'>Удалить чат</div>
                </div>
                <div className='UserAddInfo_button' id='UserAddInfo_block'>
                    <img src={block} alt="block icon" className='UserAddInfo_icon'/>
                    <div className='UserAddInfo_button_text'>Заблокировать</div>
                </div>
            </div>
        </div>:
        <></>
    )
}