import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchPage = (props) => {

    const { name, image } = props.vehicle;
    const style={ width: '220px',height:'230px',
     marginLeft:'30px', 
     marginTop:'120px',
     backgroundColor:'grey',
     color:'white',
     borderRadius:'10px'
    }

    
    return (
         <Link style={{textDecoration:'none'}} to={`/Destination/${name}`}>
          <div>
        <div className="col-md-3  mt-5 container">
            <Card style={style}> 
                <Card.Body>
                <Card.Img style={{width:'90%',marginLeft:'20px'}} src={image} />
                    <Card.Title style={{textAlign:'center'}}>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
        </div>

         </Link>
    );
};

export default SearchPage;




