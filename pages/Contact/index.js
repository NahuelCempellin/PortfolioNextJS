import { useRef } from "react";
import emailjs from 'emailjs-com'
import NavBar from "../../components/navbar/navbar"


export default function Contact(){

     
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0f37gtj", 
      'template_0rq9esd', 
      form.current, 
      '8drHBIS7iehYuIbQe')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
    alert('Message sent!')
  };


    return(
        <div>
            <NavBar/>

            <div className="cont">
                <div>
                <h1>Contact me!!</h1>
                </div>

                <div className="form">
                <form ref={form} onSubmit={sendEmail}>

        <div className="Cuerpo">
        <div className='datos'>
          
          <input type="text" name="user_name" placeholder='Name' />
          
          <input type="email" name="user_email" placeholder='Email' />
          
        </div>

          <input type="text" name="asunto" placeholder='Subject' className="asunto" />
        </div>

          <div className='mensaje'>
            <span>
                <textarea  name="message" placeholder='Message'/> 
            </span>
          <button type="submit" value="Send" >Send message</button>
          {/* <input type="submit" value="Send" /> */}
          </div>
          </form>
                </div>
            </div>


            <style jsx>{`


            .datos{
                
                width:35em;
                display:flex;
                 align-items:center;
                 justify-content: space-between;
            }


            .asunto{
                width:100%;
            }

            .Cuerpo{
                
                height: 7em;

                display:flex;
                align-items:center;
                justify-content:space-between;
                flex-direction: column;
            }

            .cont{
                
                width: 100%;
                height: 86.6vh;

                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction: column;
            }

            textarea{
                padding:1em;
                border: 1px solid #6df2a4;
                width:42em;
                height:15em;
                color:#6df2a4;
                background-color:#25262a;
                border-radius:10px;
            }


            h1{
                color:#6df2a4;
            }

            .form{
                border:1px dashed #6df2a4;
                width:80%;
                height:30em;
            }

            form{
                
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                justify-content:space-evenly;
                flex-direction: column;
            }
            input{
                width:20em;
                padding:1em;
                border: 1px solid #6df2a4;
                color:#6df2a4;
                border-radius: 10px;
                
                background-color:#25262a;


            }
            button{
                
                margin-top: 1em;
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
            `}</style>
        </div>
    )
}