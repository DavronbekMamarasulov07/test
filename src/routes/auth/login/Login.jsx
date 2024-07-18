import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import  Container  from '../../../components/container/Container';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorage } from '../../../helpers/index';

const { Title , Text } = Typography;






const Login = () => {

  const [form] = Form.useForm(); 
  const navigate = useNavigate();

  const onFinish = async (values) => {
    values.username === "admin" && values.password === "12345678" ? setInterval(() => navigate("/products"), 2000)  && toast.success("Login Success")  && saveToLocalStorage("token", values) : toast.error("Login Failed");
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className=' h-screen flex items-center justify-center '>
      <Container>
        <Form
            form={form}
          name="basic"
          layout="vertical"
          
          className='bg-slate-300 p-4 rounded-xl :'
          initialValues={{
            remember: true,
          }}
          style={{ maxWidth: 450, display: "block", margin: "0 auto" ,}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        > 
          <Title level={2} className='text-center'><Link to="/">Login</Link></Title>
          <Form.Item
            style={{marginTop: "60px"}}
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            style={{marginBottom: "60px"}}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>



          <Form.Item
            className='text-center w-full'
            style={{width: "100%"}}
          >
            <Button className='w-[60%] ' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
            <Text level={2} className='flex justify-center gap-1' >Don't have an account? <Link  to="/auth">Register</Link></Text>
        </Form>
      </Container>
    </div>
  )
}

export default Login

