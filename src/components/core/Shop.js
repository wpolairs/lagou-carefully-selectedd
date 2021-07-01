import { useSelector } from "react-redux";
import Layout from "./layout";

export default function Shop() {
    const state = useSelector(state => state)
    console.log(state);
    return (
        <Layout title="拉勾严选商城" subTitle="快来挑选你喜欢的吧！">
            Shop
        </Layout>
    )
}
