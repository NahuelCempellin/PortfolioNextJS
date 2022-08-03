
import NavBar from "../../components/navbar/navbar"
import { aboutMe } from "../../mocked Files/MockedAboutMe"
import Image from 'next/image';
import photo from '../../images/cortaoSinfondo.png'
import {BsFillCloudDownloadFill} from 'react-icons/bs'
import Link from 'next/link'

export default function AboutMe(){
const data= aboutMe;

    return(
        <div>
                <NavBar/>
            

            <div className="cont">
            <div className="imgCont">
                <Image src={photo}/>
            </div>
                {
                    data.map(el=> {
                        return(
                            <div>
                                <div className="hcont">
                                <h1>About Me</h1>

                                </div>
                                <div className="textCont">
                                <h2>{el.name + ' ' + el.lastname}</h2>
                                <div className="ageCont">
                                <p>{el.age + ' '+'years'}</p>
                                <p className="dev">{el.dev}</p>

                                </div>
                                </div>
                                <div>
                                </div>
                                <div className="texto">
                                    <p>{el.text}</p>
                                </div>

                                <div className="buttoncont">

                                   <a target='_blank' href='https://docs.google.com/document/d/125E4k3bjxfxgpn2gYmsc6R8hLjHVnQcB/edit?usp=sharing&ouid=109841190894507955967&rtpof=true&sd=true'>
                                    <button>Download CV <BsFillCloudDownloadFill className="nube"/> </button>
                                    </a>
                                    
                                    <Link href='/Resume'>
                                    <button>Resume</button>
                                    </Link>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>


                <style jsx>{`


               
               
                .cont{
                    
                    width: 100%;
                    min-height: 87vh;
                    display: flex;
                    align-items:center;
                    justify-content: space-evenly;
                    
                }
                .dev{
                    color:#6df2a4;
                }

                .buttoncont{
                    
                    display:flex;
                    align-items:center;
                    justify-content: space-around;
                    flex-direction: row-reverse;
                }

                button{
                    border:none;
                    background-color:#6df2a4;
                    border-radius: 20px;
                    color: #25262a;
                    width: 13em;
                    height: 3em;

                    display:flex;
                    align-items:center;
                    justify-content:Center;
                }
                button:hover{
                    color: #6df2a4;
                    background-color:#25262a;
                    border:1px solid #6df2a4;
                    transition: 1s ease;
                }
                button:active{
                    box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
                transform: translateY(4px);
                }

                .hcont{
                    
                    margin-top:-12em;
                    color:#6df2a4;
                }
                .ageCont{
                    width:15em;
                    
                    display:flex;
                    align-items:center;
                    justify-content: space-around;
                    margin-top: -2em;
                }

                .texto{
                    
                    width: 30em;
                    height:16em;
                    padding:1em;
                }


                @keyframes float {
                    0% {
                        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                        transform: translatey(0px);
                    }
                    50% {
                        box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
                        transform: translatey(-20px);
                    }
                    100% {
                        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                        transform: translatey(0px);
                    }
                }

                .imgCont{
                    margin-top: -10em;
                    width: 18em; 
                    height: 18em;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius: 50%;
                    overflow:hidden;
                    border: 1px solid #6df2a4;
                    background: rgb(20,21,24);
                    background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(30,31,32,1) 49%, rgba(54,54,54,1) 100%);
                    box-shadow: 10px 10px 5px 0pxrgba(109,242,164,.75);
                    -webkit-box-shadow: 4px 3px 0px 0px rgb(109 242 164 / 75%);
                    -moz-box-shadow: 10px 10px 5px 0px rgba(109,242,164,.75);

                    animation: float 6s ease-in-out infinite;
                }

                img{
                    width:100%;
                }

                @media screen and (max-width: 798px){
                    .imgCont{
                         display:none;
                     }
                    .hcont{
                        
                        display:flex;
                        align-items:center;
                        justify-content:center;

                    }
                    .textCont{
                        
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        flex-direction:column;
                    }

                    }



                

                `}</style>
        </div>
    )
}