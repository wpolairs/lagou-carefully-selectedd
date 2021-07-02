import Layout from "./Layout";
import { Form, Button, Input } from 'antd';
function Signin() {
    return (
        <Layout title="登录" subTitle="">
            <Form>
                <Form.Item label="邮箱" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>登录</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default Signin
