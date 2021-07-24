import React from 'react';
import { Segment } from 'semantic-ui-react'

import './styles.scss';

export default ({nbresult}) =>(

  <Segment>la recherche a donné {nbresult} résultats</Segment>
);
