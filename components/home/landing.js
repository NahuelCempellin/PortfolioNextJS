import Image from "next/image"
import Link from 'next/link'


export default function Landing(){

    

    return(
        <div className="landingCont">
            <div className="ball"></div>
            <div className="ballmed"></div>
            <div className="ballsmall"></div>
            <div className="text">
                <div className="hi">
                    <p>Hi! im</p>
                </div>
                <div className="name">
                <h1 className="uno">Nahuel</h1>
                <h1>Cempellin</h1>
                </div>
                <div className="devcont">
                    <p>Full-stack</p>
                    <p className="dev">Developer</p>
                </div>
            </div>
            <div className="imagen">
                <p className="puno">to my personal portfolio!</p>
                <p className="pdos">Click to see more...</p>
                

                <div >
                    <Link href='/Aboutme'>
                    <a>
                    <button className="ButtonAb">About Me...</button>
                    </a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
            .landingCont{
                
                width:100%;
                min-height:41.4em;

                display:flex;
                align-items:center;
                justify-content: space-around;

                
            }

            .ButtonAb{
                background-color:#6df2a4;
                border-radius: 20px;
                color:#25262a;
                border: none;
                width: 8em;
                height: 3em;
                margin-left: 14em;
                
            }
            .ButtonAb:hover{
                background-color:#25262a;
                border: 1px solid #6df2a4;
                color: #6df2a4;
                transition: 1s ease;

            }
            .ButtonAb:active{
                box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
            transform: translateY(4px);
            }

            .puno:before{
                color:#6df2a4;
                content: 'Welcome' ;
                margin-right: .4em;
            }

            .pdos{
                margin-top: -1em;
                margin-right: 2em;
                
            }
            .imagen{
                
                display: flex;
                align-items:center;
                justify-content:center;
                flex-direction: column;
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

            .imagen{
                
                width:100%;
                height:41.4em;
                display:flex;
                align-items:center;
                justify-content:center;

            }
            .text{
               
                width:100%;
                height:41.4em;
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;

            }
            h1{
                font-size:4em;
                margin-top:-.5em;
            }
            p{
                font-size: 1.5em;
            }
            .hi{
                
                margin-right:25em;
            }
            .name{
               
                width:100%;
                display: flex;
                align-items:center;
                justify-content:center;
            }
            .uno{
                margin-right: .2em;
                color:#6df2a4;
            }
            .devcont{
               margin-top: -2em;
                width:100%;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .dev{

                margin-left: .3em;
                font-size: 1.5em;
                color:#6df2a4;
            }
            
            .ball{
                z-index: -1;
                margin-top: -8em;
                margin-right: 56em;
                position:absolute;
                width:30em;
                height:30em;
                border-radius:50em;
                background: rgb(20,21,24);
                background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(30,31,32,1) 49%, rgba(54,54,54,1) 100%);
             
                bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);
            
                animation: float 6s ease-in-out infinite;
            }
            .ballmed{
                z-index: -2;
                margin-top: -30em;
                margin-right: 78em;
                width:8em;
                height:8em;
                border-radius:50%;
                position:absolute;
                background: rgb(20,21,24);
                background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(20,21,24,1) 49%, rgba(38,39,43,1) 100%);

                bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);

                // transform: rotateY(deg);

                animation: float 6s ease-in-out infinite;
            }

            .ballsmall{
                z-index: -1;
                margin-top: 15em;
                margin-right: 30em;
                width:8em;
                height:8em;
                border-radius:50%;
                position:absolute;
                background: rgb(20,21,24);
                background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(30,31,32,1) 49%, rgba(54,54,54,1) 100%);

                bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);

                // transform: rotateY(deg);

                animation: float 6s ease-in-out infinite;
            }



            @media screen and (max-width:1150px ){

                .ball{
                    z-index: -1;
                    margin-top: -8em;
                    margin-right: 40em;
                    position:absolute;
                    width:30em;
                    height:30em;
                    border-radius:50em;
                    background: rgb(20,21,24);
                    background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(30,31,32,1) 49%, rgba(54,54,54,1) 100%);
                 
                    bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                    -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                    -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);
                
                    animation: float 6s ease-in-out infinite;
                }
                .ballmed{
                    z-index: -2;
                    margin-top: -30em;
                    margin-right: 68em;
                    width:8em;
                    height:8em;
                    border-radius:50%;
                    position:absolute;
                    background: rgb(20,21,24);
                    background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(20,21,24,1) 49%, rgba(38,39,43,1) 100%);
    
                    bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                    -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                    -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);
    
                    // transform: rotateY(deg);
    
                    animation: float 6s ease-in-out infinite;
                }
    
                .ballsmall{
                    z-index: -1;
                    margin-top: 15em;
                    margin-right: 20em;
                    width:8em;
                    height:8em;
                    border-radius:50%;
                    position:absolute;
                    background: rgb(20,21,24);
                    background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(30,31,32,1) 49%, rgba(54,54,54,1) 100%);
    
                    bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                    -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                    -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);
    
                    // transform: rotateY(deg);
    
                    animation: float 6s ease-in-out infinite;
                }
    

            }

            @media screen and (max-width: 900px){
                .landingCont{
                    width:100%;
                    
                    display:flex;
                    algin-items: center;
                    justify-content: space-evenly;
                    flex-direction: column;
                }

                h1{
                    font-size: 2.5em;
                }
                .hi{
                    
                    margin-right:15em;

                }

            .ball{
                z-index: -1;
                margin-top: -43em;
                margin-right: 6em;
                position:absolute;
                width:20em;
                height:20em;
                border-radius:50em;
                background: rgb(20,21,24);
                background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(30,31,32,1) 49%, rgba(54,54,54,1) 100%);
             
                bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);
            
                animation: float 6s ease-in-out infinite;
            }
                
                
            .ballmed{
                z-index: -2;
                margin-top: -60em;
                margin-right: 20em;
                width:8em;
                height:8em;
                border-radius:50%;
                position:absolute;
                background: rgb(20,21,24);
                background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(20,21,24,1) 49%, rgba(38,39,43,1) 100%);

                bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);

                // transform: rotateY(deg);

                animation: float 6s ease-in-out infinite;
            }


            .ballsmall{
                z-index: -1;
                margin-top: -21em;
                margin-right: -6em;
                width:8em;
                height:8em;
                border-radius:50%;
                position:absolute;
                background: rgb(20,21,24);
                background: linear-gradient(90deg, rgba(20,21,24,1) 0%, rgba(30,31,32,1) 49%, rgba(54,54,54,1) 100%);

                bbox-shadow: 10px 10px 5px 0pxrgba(171,167,167,.75);
                -webkit-box-shadow: 4px 2px 7px 0px rgb(171 167 167 / 18%);
                -moz-box-shadow: 10px 10px 5px 0px rgba(171,167,167,.75);

                // transform: rotateY(deg);

                animation: float 6s ease-in-out infinite;
            }

            }


            `}</style>
        </div>
    )
}