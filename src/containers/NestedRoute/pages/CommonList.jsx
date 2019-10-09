import React, {PureComponent} from 'react';

class CommonList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.list.map((item, index) => {
          return <p key={item.id}>{`name: ${item.name}`}</p>
        })}
      </div>
    );
  }
}

export default CommonList;