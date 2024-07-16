import React, { useEffect, useRef, useState } from 'react'
import './MainFooter.css'
import send from '../../icons/send.png'

export default function MainFooter(){
    const[message, setMessage] = useState<string>('')

    const inputRef = useRef<any>(null)

    function handleInput(ev:React.KeyboardEvent<HTMLTextAreaElement>){
        setMessage(ev.currentTarget.value)
        inputRef.current.style.height = 'auto'
        let height = inputRef.current?.scrollHeight
        inputRef.current.style.height = `${height-10}px`
    }

    function handleClick(){
        setMessage('')
        inputRef.current.style.height = `calc(1em + 10px)`
    }

    useEffect(()=>{
        document.addEventListener('keyup',(ev: KeyboardEvent)=>{
            if(ev.target !== inputRef.current){
                if(ev.code === 'Enter'){
                    console.log('send')
                    setMessage('')
                    inputRef.current.style.height = `calc(1em + 10px)`
                }
            }
        })
    })

    return(
        <>
            <div className='MainFooter'>
                <textarea className='MainFooter_input' value={message} 
                ref={inputRef} onInput={handleInput} rows={1} placeholder='Введите текст сообщения'/>
                <div className='MainFooter_send_wrapper' onClick={handleClick}>
                    <img src={send} alt="send icon" className='MainFooter_send_icon' id='send_icon1'/>
                    <img src={send} alt="send icon" className='MainFooter_send_icon' id='send_icon2'/>
                </div>
            </div>
        </>
    )
}