import { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {FaHome , FaList} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {FaCodeBranch} from 'react-icons/fa'
import {BsFillChatDotsFill} from 'react-icons/bs'
import Nav2 from "./nav2";
import Link from 'next/link'


export default function Nav1(){
    const [tru,setTru]= useState(false)
    const [color,setColor]=useState('white');
    const [colorA,setColorA]= useState('white')
    const [colorR,setColorR]= useState('white')
    const [colorS,setColorS]= useState('white')
    const [colorC,setColorC]= useState('white')


    const[hidde, setHidde]= useState(false)

    function Hidde(){
        setHidde(true);
    }
    function Close(){
        setHidde(false)
    }


    function changeColor(e){
        console.log(e.target.innerText)
        if(e.target.innerText === 'Home'){
            setColor('#6df2a4;')
        }else{
            setColor('white')
        }

        if(e.target.innerText === 'About me'){
            setColorA('#6df2a4;')
        }else{
            setColorA('white')
        }

        if(e.target.innerText === 'Resume'){
            setColorR('#6df2a4;')
        }else{
            setColorR('white')
        }

        if(e.target.innerText === 'Services'){
            setColorS('#6df2a4;')
        }else{
            setColorS('white')
        }

        if(e.target.innerText === 'Contact'){
            setColorC('#6df2a4;')
        }else{
            setColorC('white')
        }
    }

  
    return(
        <div className="container">

            <div className="Navgrande">
            <div >
            <Link href={'/'}>
            <a><FaHome/> Home</a>
            </Link>
            </div>
            <div  >
            <Link href={'/Aboutme'}>
            <a><BsBook/> About me</a>
            </Link>
            </div>
            <div>
            <Link href={'/Resume'}> 
            <a><FaList/> Resume</a>
            </Link>
            </div>
            <div>
            <Link href={'Services'}>
            <a><FaCodeBranch/> Services</a>
            </Link>
            </div>
            <div>
            <Link href={'/Contact'}>
            <a><BsFillChatDotsFill/> Contact</a>
            </Link>
            </div>
            </div>

            <div
            onClick={Hidde} 
            className="navresponsive">
                <div className="burger">
                    <GiHamburgerMenu />
                </div>

            </div>

            <div className={hidde === true? "hidden" : 'notHide'}>
            <div className="innerhidden">
                {
                    hidde === true?
                    <div className="menu">
                    <div
                    className='close' 
                    onClick={Close}>
                    <AiOutlineClose/>
                    </div>
                        

                    <div className="innerMenu">    
                    <div id='home' onClick={changeColor}>
                    <Link href={'/'}>
                     <a><FaHome/> Home</a>
                    </Link>
                    </div>


                    <div  id='about' onClick={changeColor}>
                    <Link href={'/Aboutme'}>
                    <a><BsBook/> About me</a>
                    </Link>
                    </div>
                    
                    
                    <div  id='resume' onClick={changeColor}> 
                    <Link href={'/Resume'}>
                    <a><FaList/> Resume</a>
                    </Link> 
                    </div>

                    <div id='service' onClick={changeColor}>
                    <Link href={'/Services'}>
                    <a><FaCodeBranch/> Services</a>
                    </Link>
                    </div>


                    <div id='contact' onClick={changeColor}>
                    <Link href={'/Contact'}>
                    <a><BsFillChatDotsFill/> Contact</a>
                    </Link>
                    </div>

                    </div>
                    
                    

                    <div className="contNav2">
                        <Nav2/>
                    </div>
                    </div>
                    :null
                }
                    
            </div>
            </div>

            <style jsx>{`

            .hidden{
                display:none;
            }

            .close{
                display:none;
            }

            .Navgrande{
                // border:1px solid white;
                width:100%;
                height: 6em;
                display:flex;
                align-items:center;
                justify-content: space-around;

            }
            .container{
                cursor:pointer;
                width:50%;
                height: 6em;
                display: flex;
                align-items: center;
                justify-content: space-around;
                color:white;
            }

            #home{
                color: ${color};
            }
            #about{
                color: ${colorA};
            }
            #resume{
                color: ${colorR};
            }
            #service{
                color: ${colorS};
            }
            #contact{
                color: ${colorC};
            }
          

            .navresponsive{
                display: none;
            }

            @media screen and (max-width: 900px){
                
                .navresponsive{
                    
                    
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    
                    color:#6df2a4;
                    width:2em;
                    height: 2em;
                    font-size:2em;

                    position:relative;

                    
                }

                .Navgrande{
                    display: none;
                } 

                .container{

                    width:20%;
                   
                    display: flex;
                     align-items: center;
                     justify-content: flex-start;
                }

                .burger:active{
                    box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
                    transform: translateY(4px);
                }


                .hidden{
                   
                    width:70%;
                    min-height:100vh;
                    margin-top:53.5em;
                    position: absolute;
                    display:flex;
                    background-color:#25262a;
                    z-index:2;

                    
                }

                .close{
                
                    width:2em;
                    height:2em;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color: #6df2a4;
                    font-size: 1.5em;
                    margin-right: 6.5em;
                    margin-top: 1em;
                    
                    
                }

                .notHidd{
                    display:none;
                }

                .innerhidden{
                    
                    width:100%;
                    min-height: 110vh;
                }

                .menu{
                    
                    width:100%;
                    height: 100%;
                    display: flex;
                    align-items:center;
                    justify-content: space-between;
                    flex-direction: column;
                    font-size: 1.5em;
                }
                .menu div{
                    // border-bottom:2px solid #6df2a4;
                    width:100%;
                    margin-bottom: 1em;
                    
                    
                    
                }

                .innerMenu{
                   
                    
                    height: 20em;

                    display:flex;
                    align-items:center;
                    justify-content: space-around;
                    flex-direction: column;
                }


                .contNav2{
                    border-top: .2px solid #6df2a4;
                    width:100%;
                    
                }
               
            }

            
            `}</style>
        </div>

        
    )
}