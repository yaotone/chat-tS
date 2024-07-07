import './MenuBar.css'
import MenuBarUser from './MenuBarUser'

interface MenuBarData{
    isActive: boolean
    setIsActive: Function
}

export default function MenuBar({isActive, setIsActive}: MenuBarData){
    return(
        <>
            <div className={isActive ? 'MenuBar_active' : 'MenuBar'}>
                <MenuBarUser></MenuBarUser>
            </div>
            {isActive && 
            <div className='MenuBar_background' 
            onClick={()=>setIsActive(false)}></div>}
        </>
    )
}