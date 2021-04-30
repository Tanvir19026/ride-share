import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Data from '../../fakeData/Data.json'

const SearchPage = (props) => {

    const { name, image ,ticketType,id} = props.vehicle;
    const style={ width: '220px',height:'230px',
     marginLeft:'30px', 
     marginTop:'120px',
     backgroundColor:'grey',
     color:'white',
     borderRadius:'10px'
    }
    const history=useHistory();
    
    const handleoK=(id)=>{
        const url=`/Destination/${id}`;
        history.push(url)
    }
    
    return (
        
          <div>
        <div className="col-md-3  mt-5 container">
            <Card style={style}> 
                <Card.Body>
                {/* <Link style={{textDecoration:'none'}} to={`/Destination/${id}`}> */}
                <Card.Img style={{width:'90%',marginLeft:'20px'}} src={image} />
                    <Card.Title style={{textAlign:'center',color:'white'}}>{name}</Card.Title>
                    <button onClick={() => handleoK(id)}>Ok</button>
                    {/* </Link> */}
                </Card.Body>
            </Card>
        </div>
        </div>

       
    );
};

export default SearchPage;




