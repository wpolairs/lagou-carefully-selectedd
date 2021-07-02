import Layout from './Layout';
import { Form, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/actions/signup';

function Signup() {
    const dispatch = useDispatch();
    const handleOnFinish = (value) => {
        console.log(value);
        dispatch(signup(value));
    }
    return (
        <Layout title="注册" subTitle="">
            <Form onFinish={handleOnFinish}>
                <Form.Item label="昵称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">注册</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default Signup
