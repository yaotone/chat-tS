import { time } from 'console'
import Massage from './Massage'
import './MassagesContainer.css'

let Massages = [{text: 'fgewjbfjewbjf wdnmq ndlqwl dlwq ldmqlw mdlwmqd wmqlkdmwlkdmlkqw', owner: 'me', time: `2024-12-10 12:11`, status: `sending`}, 
{text: 'S', owner: 'w', time: `2024-12-08 12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-07 12:11`, status: `sending`},
{text: 'f', owner: 'me', time: `2024-12-07 12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-07 12:11`, status: `sended`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-07 12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-07 12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-07 12:11`, status: `sended`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-07 12:11`, status: `read`},
{text: 'fgewjbfjewbjf', owner: 'me', time: `2024-12-07 12:11`, status: `read`},
{text: 'fgewjbfjewbjf', owner: 'me', time: `2024-12-07 12:11`, status: `read`},
{text: 'fgewjbfjewbjf', owner: 'me', time: `2024-12-07 12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-06 12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-06 12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `2024-12-06 12:11`, status: `read`}
]

export default function MassagesContainer(){
    return(
        <>
            <div className='MassagesContainer'>
                {Massages.map((textData, index)=>{
                    return <Massage data={textData}
                    isNewDay = {(Massages[index + 1]?.time.split(' ')[0] !== Massages[index].time.split(' ')[0])}
                    isLast = {Massages[index-1]?.owner !== textData.owner}></Massage>
                })}
            </div>
        </>
    )
}