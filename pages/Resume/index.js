import NavBar from "../../components/navbar/navbar"
import Link from "next/link"
import { resumeStudy, resumeExperience } from "../../mocked Files/MockedAboutMe"
import {BsBook} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {FaCodeBranch} from 'react-icons/fa'


export default function Resume(){
    const study= resumeStudy;
    const work= resumeExperience;
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="tittle">
            <h1>Resume</h1>
            </div>
            <div className="ResumeCont">

                <div className="contuno">
                    {
                        study.map(el=> {
                            return(
                                <div className="contText" key={el.TAexp}>
                                    <h2>Studies {' '} <BsBook/></h2>



                                <div className="primero" key={el.another}>
                                    <div className="boot">
                                    <h3>{ el.bootcamp + ' ' + 'Bootcamp'}</h3>
                                    <p className="date">{el.desde + '-'+ el.hasta}</p>
                                    <p className="career">{'Career:' + ' '+ el.dev }</p>
                                    </div>
                                  
                                  <div className="exp">
                                    <h3 >{'Work experience in the bootcamp:'}</h3>
                                    <p>{el.TAexp}</p>
                                    </div>
                                    </div>





                                    
                                    <h3>Developed projects</h3>
                                    <div className="contUl">
                                    <ul>
                                        {
                                            el.projects.map(e=>(
                                                <li key={e}>{e}</li>
                                            ))
                                        }
                                    </ul>
                                    </div>

                                    <h3>{'Skills'}</h3>
                                    <div className="contUl">
                                    <ul>
                                        {
                                            el.tech.map(e=> (<li key={e}>{e}</li>))
                                        }
                                    </ul>
                                    </div>

                                
                                    <div className="contUl">
                                    <ul>{
                                        el.other.map(e=>(<li key={e}>{e}</li>))
                                        }</ul>
                                    </div>
                                    
                                    
                                </div>
                            )
                        })
                    }
                
                </div>
                <div className="contdos">
                 
                        {
                            work.map(el=>{
                                return(
                                    <div key={el.date}>
                                        <div className="contWork">
                                        <h2>Work Experience<FiSettings/></h2>
                                        <p className="dateW">{el.date}</p>
                                        <p className="expWork">{el.experiencia}</p>
                                        </div>

                                        <div className="techUsed">
                                        <h3>Used technology</h3>
                                       <ul>{el.technologies.map(e=> (<li key={e} >{e}</li>))}</ul>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    
                    <div className="buttonDiv">
                    
                    <Link href='/Services'>
                    <button>Services <FaCodeBranch/></button>
                    </Link>
                    
                    </div>
                </div>
            </div>

            <style jsx>{`

            .buttonDiv{
                margin-top:5em;
                width:90%;
                // border:1px solid white;
                display:flex; 
                align-items: center;
                justify-content: flex-end;
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

           
            .techUsed{
                
                display:flex; 
                align-items:center;
                justify-content:center;
                flex-direction: column;
            }
            .contWork{
                
                width:100%;
                display:flex; 
                align-items:center;
                justify-content:center;
                flex-direction:column;
            }
            .contWork h2{
                width:40%;
            }
            .dateW{
               
                width:20%;
                margin-top: -2.5em;
                margin-left: -10em;
                color: #6df2a4;
                font-size: .7em;
                
            }

            .primero{
                
                display:flex;
                align-items:flex-start;
                justify-content:center;
                margin-bottom: 1em;
            }
            .exp{
                
                width:50%;
                padding-right: 1em;
            }

            .exp h3{
                
                margin-left: .5em;
            }

            .exp p{
                // border: 1px solid white;
                margin-top: -1.5em;
            }

            .career{
               
                margin-top: -2em;
                
            }

            .boot{
               
                width:40%;
                min-height:20em;
                
                display:flex;
                // align-items:flex-start;
                // justify-content: center;
                flex-direction: column;
                border-right:1px solid #6df2a4;
            }

            .contUl{
                
                width:100%;
            }

            ul{
                display:flex;
                align-items:center;
                jusitfy-content:space-around;
            }

            li{
                list-style:none;
                min-width:auto;
                font-size:.85em;
                margin-left: 1em;
                border:1px solid #6df2a4;
                border-radius: 10px;
                color:#6df2a4;
                background-color:#25262a;
                padding:.5em;
            }

            .contText{
                
                padding:1em;

                display:flex; 
                align-items:center;
                justify-content:center;
                flex-direction: column;
            }

            h3{
                color:#6df2a4;
            }
            h2{
                color:#6df2a4;
                width: 20%;
                display:flex; 
                align-items:center;
                justify-content:space-around;
                
            }
            .date{
                color:#6df2a4;
                font-size:.7em;
                width:15em;
                margin-top:-2.5em;
                
            }
            .ResumeCont{
               
                width:100%;
                min-height: 75vh;
                display:flex;
                align-items:center;

                
            }
            p{
                
                width: 70%;
                padding:1em;
            }

            .contuno{
                 border-right:1px dashed #6df2a4;
                width:50%;
                min-height: 75vh;
               } 
            .contdos{
               
                width:50%;
                min-height: 75vh;
                margin-top:-10em;
                
            }
            .tittle{
                width:100%;
                display: flex;
                align-items:center;
                justify-content:center;
               
                color:#6df2a4;

            }



            `}</style>
        </div>
    )
}