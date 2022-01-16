import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";




function FullCard  ({users}) {
    const { id } = useParams(); 
    return (   
        <div> 
            <CardGroup>
                {users.filter(user => user.id === id).map((user, index) => (
                    <Card key={index} variant="outlined" style={{width: '20rem'}}>
                        <h5>is this working</h5>
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                        <p className="card-text">{user.website}</p>
                    </Card>
                ))}
        </CardGroup> 
        </div>    
    );

}

export default FullCard ;
