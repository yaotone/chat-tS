import './ExitAccButton.css'
import exit from '../../icons/exit.png'
import enter from '../../icons/enter.png'
import { useState } from 'react';

export default function ExitButton(){
    let isLogged = true;
    const[isDowned, setIsDowned] = useState<boolean>(false);

    function onMouseDown(){
        setIsDowned(true)
        document.addEventListener('mouseup', ()=>setIsDowned(false))
    }
    return(
        isLogged ?
        <div className={isDowned ? 'ExitButton activeButton' :'ExitButton'} 
        onMouseDown={onMouseDown} onMouseUp={()=>console.log('click')}> 
            <div className='ExitButton_text'>Выйти из аккаунта</div>
            <div className='ExitButton_icon' style={{backgroundImage: `url(${exit})`}}></div>
        </div>
        : 
        <div className={isDowned ? 'ExitButton activeButton' :'ExitButton'} 
        onMouseDown={onMouseDown} onMouseUp={()=>console.log('click')}>
            <div className='ExitButton_text'>Войти в аккаунт</div>
            <div className='ExitButton_icon' style={{backgroundImage: `url(${enter})`}}></div>
        </div>
    )
}