import React from 'react';
import { inject } from 'mobx-react';

@inject('resource', 'router')
class RecordBoard extends React.Component {
  render() {
    return (<div>count</div>)
  }
}

export default RecordBoard;