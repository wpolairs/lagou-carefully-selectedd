import { Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
export default function Navigation() {
    const router = useSelector(state => state.router);
    console.log(router.location.pathname);
    return (
        <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
            <Menu.Item key="/">
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/shop">
                <Link to="/shop">商城</Link>
            </Menu.Item>
        </Menu>
    )
}
