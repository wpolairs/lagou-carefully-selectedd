import { useSelector } from "react-redux";
import Layout from "./layout";

export default function Home() {
    const state = useSelector(state => state)
    console.log(state);
    return (
        <Layout title="拉勾严选首页" subTitle="尽情享受吧！">
            Home
        </Layout>
    )
}