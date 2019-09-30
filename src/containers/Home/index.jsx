import React, {PureComponent} from 'react';
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
      </div>
    );
  }
}

export default Home;