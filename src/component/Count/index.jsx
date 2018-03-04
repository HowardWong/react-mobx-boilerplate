import React from 'react';
import { observer, inject } from 'mobx-react';

import RecordBoard from './RecordBoard';

@inject('resource', 'router')
@observer
class Count extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <div>
        <p>already click {resource.count} times</p>
        <RecordBoard />
      </div>
    )
  }
}

export default Count;