import Layout from './Layout';
import { Form, Button, Input } from 'antd';

function Signup() {
    return (
        <Layout title="注册" subTitle="">
            <Form>
                <Form.Item label="昵称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">注册</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default Signup
