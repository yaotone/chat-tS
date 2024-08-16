import { time } from 'console'
import Massage from './Massage'
import './MassagesContainer.css'

let Massages = [{text: 'fgewjbfjewbjf wdnmq ndlqwl dlwq ldmqlw mdlwmqd wmqlkdmwlkdmlkqw', owner: 'me', time: `12:11`, status: `sending`}, 
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `sending`},
{text: 'f', owner: 'me', time: `12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `sended`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `sended`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `read`},
{text: 'fgewjbfjewbjf', owner: 'me', time: `12:11`, status: `read`},
{text: 'fgewjbfjewbjf', owner: 'me', time: `12:11`, status: `read`},
{text: 'fgewjbfjewbjf', owner: 'me', time: `12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `read`},
{text: 'Slkmkgewjbfjewbjfwqdmqwkdn kwqndj nwqjkd n qjwndjqwn jdnqkwj ndkqn wd', owner: 'w', time: `12:11`, status: `read`}
]

export default function MassagesContainer(){
    return(
        <>
            <div className='MassagesContainer'>
                {Massages.map((textData, index)=>{
                    return <Massage data={textData} 
                    isLast = {Massages[index-1]?.owner !== textData.owner}></Massage>
                })}
            </div>
        </>
    )
}