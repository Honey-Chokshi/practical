import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Form, Input, Button, Checkbox } from 'antd';




const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


class App extends React.Component{
  
  constructor(){
      super();
      this.state={
          user:null
      }
  }
  componentDidMount(){

      fetch('https://jsonplaceholder.typicode.com/posts/1').then((resp)=>{
          resp.json().then((result)=>{
              console.warn(result)
              this.setState({user:result.data})
          })
      })
       
  }
  
  render(){
    const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
    return (
      <>
      <h1>Form</h1>
      <Form

        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
        <Router>
          <Button >
            Submit
          </Button>
          <Button type="primary" htmlType="submit">
           <Link to="/">Add</Link>
          </Button>
          <Button type="primary" htmlType="submit">
          <Link to="/">update</Link>
          </Button>
          <Button type="primary" htmlType="submit">
          <Link to="/">Delete</Link>
          </Button>
          <Switch>
          <Route path="/Add">
            <Add />
          </Route>
          <Route path="/Update">
            <Update />
          </Route>
          <Route path="/Delete">
            <Delete />
          </Route>
        </Switch>

          </Router>
        </Form.Item>
      </Form></>
    );

}

}

export default App;  


