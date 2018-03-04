import React from 'react';
import { inject } from 'mobx-react';

@inject('resource', 'router')
class RecordBoard extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.resource.record.map(row => (
            <li key={row.id}>#{row.id} @ {row.timestamp}</li>
          ))
        }
      </ul>
    )
  }
}

export default RecordBoard;