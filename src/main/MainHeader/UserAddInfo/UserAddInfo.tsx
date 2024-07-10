import './UserAddInfo.css'
import avatar from '../../../icons/viperr.jpeg'
import edit from '../../../icons/edit.png'
import copy from '../../../icons/copy.png'
import { useState, useRef } from 'react'

interface IAdditionalInfo{
    isUserInfoShown: boolean,
    setIsUserInfoShown: Function
}

export default function UserAddInfo({isUserInfoShown, setIsUserInfoShown}:IAdditionalInfo){
    const[isEditing, setIsEditing] = useState<boolean>(false);

    const nameRef = useRef<any>(null);

    function handleAdditionaInfoBackgroundClick(){
        setIsUserInfoShown(false)
    }

    return(
        isUserInfoShown ? <div className='UserAddInfo_background' onClick={handleAdditionaInfoBackgroundClick}>
            <div className='UserAddInfo_container' onClick={(event:React.MouseEvent)=>{event.stopPropagation()}}>
                <div className='UserAddInfo_avatar' style={{backgroundImage: `url(${avatar})`}}></div>
                <div className='UserAddInfo_name_container'>
                    {isEditing ? <input className='UserAddInfo_name_input' 
                    style={{height: `${nameRef.current.clientHeight-1.5}px`}}></input> : 
                    <div className='UserAddInfo_name' ref={nameRef}>Димас Барабас</div>}
                    <div className='UserAddInfo_action_icon' style={{backgroundImage: `url(${edit})`}} onClick={()=>setIsEditing(true)}></div>
                </div>
                <div className='UserAddInfo_special_name_container'>
                    <div className='UserAddInfo_special_name'>@bloodyGamer2005</div>
                    <div className='UserAddInfo_action_icon' style={{backgroundImage: `url(${copy})`}}></div>
                </div>
            </div>
        </div>:
        <></>
    )
}