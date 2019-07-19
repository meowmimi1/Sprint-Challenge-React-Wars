import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'
export default function StarWars(props) {
return(
    <div>
        
  <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
        {props.height}, {props.gender}
      </Card.Description>
    </Card.Content>
  </Card>
)

        <h1>
            Name: {props.name}
        </h1>
        <p>
            Height: {props.height}
        </p>
        <p>
            Gender: {props.gender}
        </p>
    </div>
    
)
}