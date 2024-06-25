import './SidebarHeader.css'
// import loupe from '../../icons/loupe.svg'

interface SidebarHeaderProps {
    width: number,
    isMenuActive: boolean
    setIsMenuActive: Function
}

export default function SidebarHeader({width, isMenuActive, setIsMenuActive}: SidebarHeaderProps){

    return(
        <div className='SidebarHeader_container'>
            <div className='SidebarHeader_menu_button' onClick={()=>setIsMenuActive(!isMenuActive)}>
                <div className='SidebarHeader_menu_button_bar' id={isMenuActive ? 'bar1_active' : 'bar1'}></div>
                <div className='SidebarHeader_menu_button_bar' id={isMenuActive ? 'bar2_active' : 'bar2'}></div>
                <div className='SidebarHeader_menu_button_bar' id={isMenuActive ? 'hidden_bar_active' : 'hidden_bar'}></div>
                <div className='SidebarHeader_menu_button_bar' id={isMenuActive ? 'bar3_active' : 'bar3'}></div>
            </div>
            {(width > 85) && <div className='SidebarHeader_search_wrapper'>
                <input className='SidebarHeader_search_input' 
                placeholder='Поиск...'></input>
                {/* <div className='SidebarHeader_search_icon' style={{backgroundImage: `url(${loupe})`}}></div> */}
            </div>}
        </div>
    )
}