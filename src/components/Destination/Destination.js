import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Data from '../../fakeData/Data.json';
import { Form, Button } from 'react-bootstrap';
import './Destination.css';
import peopleIcon from '../../peopleicon.png';


const Destination = (props) => {
    const {name} = useParams();
    console.log(name)
    const vehicles = Data;
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [show, setShow] = useState(true);
    
    

    useEffect(() => {
       
        setData(vehicles);

    }, [data]);
    // var index =  data.findIndex(item => item.id === id);
    // const picture=(data[id]);
     
    var result=data.find(item => item.id===id)
    
      console.log(result)
     
   


    return (
        // <div className="container mt-5">
            <div className="row">
                <div className="col-md-8"className="form-makeup">
                    {
                       
                        show ? <form>
                       
                            <label className="mr-1" htmlFor="fromtom" >Pic From</label>
                            <input type="text" name="fromTo" value={input} onInput={e => setInput(e.target.value)} /><br></br>

                            <label className="mr-4" htmlFor="fromtom" >Pic To</label>
                            <input type="text" name="fromTo" value={input2} onInput={e => setInput2(e.target.value)} /><br></br>
                           
                        </form> : <div style={{color:'white',backgroundColor:'black',borderRadius:'10px',textAlign:'center'}}>
                            <h2>{input}</h2>
                              <h2>To</h2>
                            <h2>{input2}</h2>
                        </div>
                    }
                  
                  <label for="time">Shedule:</label>
                        <input style={{width:'220px'}} type="datetime-local" id="time" name="time"></input><br></br>
                    <button style={{marginBottom:'10px'}} onClick={() => setShow(!show)} >Search</button>
                    <br></br>
                    {/* <div className="d-flex  ticket-design" > */}
                        
                    {/* {
                        show ? '' : <img height="70" width="120" src={picture.image} /> 
                        
                    }
                    {
                        show ? '':<img height="40" width="40" src={peopleIcon}/>
                    }
                    {
                     show ? '':<p style={{marginRight:'10px'}}>{picture.passenger}</p>   
                    }
                    {
                       show?'':<h6>ticket :BDT{picture.ticket}</h6>
                    }

                    
                   
                  
                    </div>
                  <div className="d-flex  ticket-design mt-2" >
                        
                        {
                           show ? '' : <img height="70" width="120" src={picture.image} /> 
                            
                        }
                        {
                           show ? '':<img height="40" width="40" src={peopleIcon}/>
                        }
                        {
                         show ? '':<p style={{marginRight:'10px'}}>{picture.passenger}</p>   
                        }
                        {
                          show?'':<h6>ticket :BDT{picture.ticket}</h6>
                        }
     
                        
                       
                      
                         </div>
                        <div className="d-flex  ticket-design mt-2" >
                        
                        {
                          show ? '' : <img height="70" width="120" src={picture.image} /> 
                            
                        }
                        {
                         show ? '':<img height="40" width="40" src={peopleIcon}/>
                        }
                        {
                        show ? '':<p style={{marginRight:'10px'}}>{picture.passenger}</p>   
                        }
                        {
                         show?'':<h6>ticket :BDT{picture.ticket}</h6>
                        }
    
                        
                       
                      
                        </div> 
                </div> */}
               <div className="col-md-4 googleMap">
                   <iframe width="400" height="300" frameborder="0" scrolling="no"
                   marginHeight="0" marginWidth="0" id="gmap canvas" src="https://maps.google.com/maps?width&amp;height=400&amp;h1=en&amp;q=%20dhaka+(Map)&amp;t=&amp;
                   z=12&amp;ie=UTF8&amp;iwla=B&amp;output=embed"
                   
                   ></iframe>
               </div>
            </div>
        </div>






    );
};
export default Destination;






