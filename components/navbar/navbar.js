import Nav1 from "./nav1"
import Nav2 from "./nav2"


export default function NavBar(){
    return(
        <div className="cont">
            <Nav1/>

            <div className='cont2'>
            <Nav2/>
            </div>
            <style jsx>{`


            .cont{
                width:100%;
                
                display:flex;
                align-items: center;
                justify-content: space-between;
            }

            .cont2{
               
                width:20%;
                display: flex;
                align-items:center;
            }

            @media screen and (max-width: 600px){
                .cont2{
                   
                    display:none;
                }

            

            `}</style>
        </div>
    )
    }