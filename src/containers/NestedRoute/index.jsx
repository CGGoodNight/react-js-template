import React, {PureComponent} from 'react';

class NestedRoute extends PureComponent {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>NestedRoute(这是公共的部分)</h1>
        <p>若路由只有/nestedRoute 而没有 /item1 或 /item2, 页面只显示公共部分</p>
        { this.props.children }
        <p>俺也一样</p>
        <p>俺也一样</p>
      </div>
    );
  }
}

export default NestedRoute;