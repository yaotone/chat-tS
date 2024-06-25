import './MenuBar.css'

interface MenuBarData{
    isActive: boolean
}

export default function MenuBar({isActive}: MenuBarData){
    return(
        <>
            {isActive && 
            <div className='MenuBar_container'>

            </div>}
        </>
    )
}