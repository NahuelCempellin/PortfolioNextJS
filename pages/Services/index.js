import NavBar from "../../components/navbar/navbar"
import { ServicesMocked } from "../../mocked Files/MockedAboutMe"
import {BiCodeAlt} from 'react-icons/bi'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {BsBrush} from 'react-icons/bs'
import {FaMobileAlt} from 'react-icons/fa'
import {BsFillChatDotsFill} from 'react-icons/bs'
import Link from "next/link"

export default function Services(){
    const Service= ServicesMocked;

    return(
        <div>
            <div>
                <NavBar/>
            </div>

            <h1>Services</h1>
            <div className="GeneralKenobi">
                {
                Service.map(el=>{
                    return(
                        <div className="DescripCont" key={el.Back}>
                            <div className="cajitas">
                            <div className="boxcont">
                            <BiCodeAlt className="icon"/>
                            </div>
                            <h2>{el.Back.title}</h2>
                            <p>{el.Back.descrip}</p>
                            </div>

                            <div className="cajitas">
                            <div className="boxcont">
                            <AiOutlineCodeSandbox className="icon"/>
                            </div>
                            <h2>{el.Front.title}</h2>
                            <p>{el.Front.descrip}</p>
                            </div>

                            <div className="cajitas">
                            <div className="boxcont">
                            <BsBrush className="icon"/>
                            </div>
                            <h2>{el.Design.title}</h2>
                            <p>{el.Design.descrip}</p>
                            </div>

                            <div className="cajitas">
                            <div className="boxcont">
                            <FaMobileAlt className="icon"/>
                            </div>
                            <h2>{el.Mobil.title}</h2>
                            <p>{el.Mobil.descrip}</p>
                            </div>

                        </div>
                    )
                })
                }
                </div>

                <div className="buttonDiv">
                    
                    <Link href='/Contact'>
                    <button>{'Contact' + ' '}<BsFillChatDotsFill className="puto"/></button>
                    </Link>
                    
                    </div>
                <style jsx>{`

.buttonDiv{
    
    width:95%;
    // border:1px solid white;
    display:flex; 
    align-items: center;
    justify-content: flex-end;
    margin-top: -5em;
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

                h1{
                    
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#6df2a4;
                }
                h2{
                    color:#6df2a4;
                }

                .boxcont{
                    
                    width:3em;
                    min-height:3em;
                    // margin-top: 1em;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size: 2.5em;
                    color:#6df2a4;
                }

                .icon{
                    
                }
                .GeneralKenobi{
                    
                    width: 100%;
                    min-height: 60vh;
                    margin-top: -4em;
                    display:flex;
                    align-items:center;
                    justify-content: space-evenly;
                }

                .DescripCont{
                    
                    width:100%;
                    min-height: 87vh;

                    display:flex;
                    align-items:center;
                    justify-content: space-evenly;

                }

                .cajitas{
                    border: 1px dashed #6df2a4;
                    width:15em;
                    height:25em;

                    display: flex;
                    align-items:center;
                    // justify-content:space-evenly;
                    flex-direction: column;
                    
                }

                .cajitas:hover{
                    margin-top:-2em;
                    background-color:#25262a;
                   
                    transition: .5s ease;

                    box-shadow: 9px 9px 5px 0px rgb(0 0 0 / 56%);
    -webkit-box-shadow: 1px 17px 12px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,.75);
                    
                    
                }

               
                

                .cajitas p{
                    padding: 1em;
                }

                `}</style>
            
        </div>
    )
}