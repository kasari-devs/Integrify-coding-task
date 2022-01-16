import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import LetteredAvatar from 'react-lettered-avatar';


function Cards  ({users}) {
   
        return (   
            <div> 
                <CardGroup> 
                    {users.map(user => (              
                         <div className="col-md-4 mb-xl-5">
                            <Card variant="outlined" style={{width: '20rem'}}>
                                <LetteredAvatar name={user.name}/>
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                                <p className="card-text">{user.website}</p>
                                <a href={`/cards/${user.id}`} className="btn btn-primary">More Details</a>    
                            </Card>
                        </div>              
                    ))}
                </CardGroup> 
            </div>    
        );
    
}
 
export default Cards ;

