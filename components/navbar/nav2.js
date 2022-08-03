import { useState } from 'react'
import {BsTwitter} from 'react-icons/bs'
import{BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'


export default function Nav2(){
    
   
    function changeCol(e){
        console.log(e)
    }

return(
    <div className='cont2'>
        <div className="buttonred">
            <a target='_blank' href='https://github.com/NahuelCempellin' className='shadowgh'>
            <AiFillGithub/>
            </a>
        </div>
        <div className="buttonred">
            <a target='_blank' href='https://www.linkedin.com/in/nahuel-felipe-cempellin' className='shadowln'>
            <BsLinkedin />
            </a>
        </div>
        <div className="buttonred">
            <a target='_blank' href='' className='shadowtw'>
            <BsTwitter />
            </a>
        </div>

        <style jsx>{`

        .cont2{
            
            width: 100%;
            height: 6em;
            display:flex;
            align-items: center;
            justify-content: space-around;
            
            
        }

        .buttonred{
            
            width:2.5em;
            height: 2.5em;
            display:flex;
            align-items: center;
            justify-content:center;

            
        }
        a{
            
            border-radius:50%;
            background-color:#25262a;
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size: 1.5em;
        }

        .shadowgh{
            box-shadow: 10px 10px 5px 0pxrgba(92,22,197,.75);
            -webkit-box-shadow: 2px 1px 0px 0px rgb(92 22 197 / 75%);
            -moz-box-shadow: 10px 10px 5px 0px rgba(92,22,197,.75);
        }
        .shadowgh:active{
            color:#5c16c5;
        }
        .shadowln{
            box-shadow: 6px 3px 5px 0px rgb(10 102 194 / 75%);
            -webkit-box-shadow: 1px 1px 0px 0px rgb(10 102 194 / 75%);
            -moz-box-shadow: 10px 10px 5px 0px rgba(10,102,194,.75);
        }
        .shadowln:active{
            color:#0a66c2;
        }
        .shadowtw{
            box-shadow: 10px 10px 5px 0pxrgba(3,89,225,.75);
            -webkit-box-shadow: 1px 1px 0px 0px rgb(3 89 225 / 75%);
            -moz-box-shadow: 10px 10px 5px 0px rgba(3,89,225,.75);
        }
        .shadowtw:active{
            color:#0359e1;
        }
        a:active{
            box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
            transform: translateY(4px);
        }

        // @media screen and (max-width: 600px){
        //     .cont2{
               
        //         display:none;
        //     }
        }
        
        `}</style>
    </div>
)
}