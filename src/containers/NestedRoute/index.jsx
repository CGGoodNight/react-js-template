import React, {PureComponent} from 'react';
import CommonList from "./pages/CommonList";
import {HashRouter, Route} from "react-router-dom";

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
        <p>1. 不同路由不同组件</p>
        { this.props.children }
        <p>2. 不同路由同一组件</p>
        <HashRouter>
          <Route path="/nestedRoute/item1" render={() => (<CommonList list = {[{id:0, name: "chen"}, {id: 1, name: "gang"}]} />)}/>
          <Route path="/nestedRoute/item2" render={() => (<CommonList list = {[{id:0, name: "gang"}, {id: 1, name: "chen"}]} />)}/>
        </HashRouter>
        <p>俺也一样</p>
        <p>俺也一样</p>
      </div>
    );
  }
}

export default NestedRoute;