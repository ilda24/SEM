import React from "react"
import "./main.css";
export default class Lists extends React.Component{
    constructor(props){
        super(props);
        this.state={  }
        
    }
    
     
    render(){
        return(
        <div class="all">
        
            <h2>Kind of a project</h2>
            <p>Click on the image to get more information... </p>
        
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

          <div id="mySidenav" class="sidenav">
            <a href="https://www.youtube.com/watch?v=0WW1HN0iG0M" id="sun" target="_blank">Sun</a>
            <a href="https://www.youtube.com/watch?v=WFvz0Q_blhk" id="earth" v>Earth</a>
            <a href="https://www.youtube.com/watch?v=SDTW-twEqZg" id="moon" target="_blank">Moon</a>
  
           </div>

           <div style={{marginLeft:"80px"}}> </div>

           <div class="container">
          
           <img class="map" src="https://www.sciencea-z.com/shared/images/units/earth-moon-and-sun.jpg" alt="Earth, Moon, Sun" usemap="#workmap" width="348" height="288"></img>
           
            <div class="overlay">The solar system</div>
            
            <map name="workmap">
            <area shape="circle" coords="64,246,138" alt="Sun" href="https://en.wikipedia.org/wiki/Sun" target="_blank"></area>
            <area shape="circle" coords="225,90,67" alt="Earth" href="https://en.wikipedia.org/wiki/Earth" target="_blank"></area>
            <area shape="circle" coords="306,10,30" alt="Moon" href="https://en.wikipedia.org/wiki/Moon" target="_blank"></area>
           </map> 
        
         </div>

         

          <div class="flip-card">
           <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://pbs.twimg.com/media/Dlp6fSxVsAAs64X.jpg" alt="Strong  Man" style={{width:"300px",height:"300px"}}></img>
              </div>
             <div class="flip-card-back">
                 <h1>A. Z.</h1> 
               <p>Software Engineer</p> 
               <p>We love that guy</p>
           </div>
       </div>
     </div>

        
 </div>
   );

  }
}
