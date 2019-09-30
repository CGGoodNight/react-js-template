import React, { useState } from "react";
import { Button } from "antd";

function Hooks() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>Click me</Button>
      <Button href="https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/hooks-intro.html" target="__blank" type="primary">学习更多Hook</Button>
    </div>
  );
}
export default Hooks;