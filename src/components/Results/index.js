import React from 'react';
import { Card } from 'semantic-ui-react'

import './styles.scss';



export default ({result}) =>(
  
  <Card 
  image={result.owner.avatar_url}
  header={result.description}
  meta={result.name}
  description={result.description}
  />
    
  
);


