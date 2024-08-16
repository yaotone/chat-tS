import './Massage.css'
import grayTick from '../../icons/gray-tick.png'
import blueTicks from '../../icons/blue-double-tick.png'
import grayTicks from '../../icons/gray-double-tick.png'

interface IMassage{
    data: 
    {
        text: string,
        owner: string,
        time: string,
        status: string
    }
    isLast: boolean
}

export default function Massage({data, isLast}:IMassage){
    return(
        <>
            <div className='Message_wrapper' style={isLast ? {marginBottom: `8px`} : {marginBottom: `0px`}}>
                <div className='Massage' style={data.owner === 'me' ? 
                {marginLeft: `auto`, marginRight: `12px`, background: `linear-gradient(to right, rgb(147, 35, 216), #843af3,
                rgb(96, 60, 255) 80%)`}: 
                {marginLeft: `12px`, marginRight: `auto`}}>
                    <div className='Message_text'>{data.text}</div>
                    <div className='Message_info'>
                        <div className='Message_info_time'>{data.time}</div>
                        <div className='Message_info_status'>
                            {data.status === 'sending' && <img className='status_ticks' src={grayTick} alt={`${data.status}`} />}
                            {data.status === 'sended' && <img className='status_ticks' src={grayTicks} alt={`${data.status}`} />}
                            {data.status === 'read' && <img className='status_ticks' src={blueTicks} alt={`${data.status}`} />}
                        </div>
                    </div>
                    { isLast && <div className='Message_triangle' style={data.owner === 'me' ? 
                    {backgroundColor: `rgb(96, 60, 255)`}: 
                    {transform: `rotate(60deg)`, right: `auto`, left: `-9px`}}></div>}
                </div>
            </div>
        </>
    )
}