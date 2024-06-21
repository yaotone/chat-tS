import React, { useState } from 'react'
import './Sidebar.css'
import SidebarHeader from './SidebarHeader/SidebarHeader';

export default function Sidebar(){
    const[width, setWidth] = useState<number>(250)

    function onMouseMove(event: MouseEvent){
        const newWidth = event.clientX;
        if((newWidth < 251) && (newWidth >= 84)){
            newWidth === 83 ? setWidth(80) : setWidth(250)
        }
        else if((newWidth >= 81) && (newWidth < 84)){
            newWidth === 83 ? setWidth(250) : setWidth(80)
        }
        else{
            setWidth(newWidth)
        }
    }

    function onMouseUp() {
        document.body.style.cursor = 'default'
        document.removeEventListener('mousemove', onMouseMove)
    }

    function onMouseDown(event: React.MouseEvent){
        event.preventDefault()
        document.body.style.cursor = 'grab';
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }

    return(
        <>
            <div className='Sidebar_container' style={{width: `${width}px`}}>
                <div className='sidebar'>
                    <div className='sidebar_border' 
                    draggable = 'false' 
                    onMouseDown={onMouseDown}
                    >
                        <div className='sidebar_border_inner'></div>
                    </div>
                    <SidebarHeader width={width}></SidebarHeader>
                </div>
            </div>
        </>
    )
}