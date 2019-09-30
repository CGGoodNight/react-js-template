import React, {PureComponent} from 'react';
import { Button } from "antd";
import history from "../../routers/history";
import './index.scss';
import "./index.less";

class Home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="home">
        <h1>Sass</h1>
        <p className="style-sass">HomePage</p>
        <br />
        <h1>Less</h1>
        <p className="style-less">HomePage</p>
        <h1>Ant Design(定制主题更多样式请点击)</h1>
        <Button href="https://ant.design/docs/react/customize-theme-cn" target="__blank" type="primary">Ant Design</Button>
        <h1>React-Router</h1>
        <Button onClick={() => {
          history.push("/notFound");
        }}>NotFound Page</Button>
        <h1>嵌套路由</h1>
        <Button onClick={() => {
          history.replace("/nestedRoute/item1");
        }} type="primary">NestedRoute</Button>
      </div>
    );
  }
}

export default Home;