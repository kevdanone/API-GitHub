import React from 'react';
import { Segment, Form } from 'semantic-ui-react'

import './styles.scss';

export default ({handle}) =>(

  <Segment>
    <Form
    onSubmit={(event) =>{
      event.preventDefault();
      const formData = new FormData(event.target);
      
      handle(formData.get("searchBar"));

    }}
    >
      <Form.Field>
      <input placeholder='value search' name="searchBar" />
    </Form.Field>
    </Form>
  </Segment>

);
