import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const SearchPage = (props) => {

    const { name, image ,ticketType} = props.vehicle;
    const style={ width: '220px',height:'230px',
     marginLeft:'30px', 
     marginTop:'120px',
     backgroundColor:'grey',
     color:'white',
     borderRadius:'10px'
    }

   
    
    return (
        
          <div>
        <div className="col-md-3  mt-5 container">
            <Card style={style}> 
                <Card.Body>
                <Link style={{textDecoration:'none'}} to={`/Destination/${ticketType}`}>
                <Card.Img style={{width:'90%',marginLeft:'20px'}} src={image} />
                    <Card.Title style={{textAlign:'center',color:'white'}}>{name}</Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </div>
        </div>

       
    );
};

export default SearchPage;




