import { useSelector } from "react-redux";
import Layout from "./layout";

export default function Shop() {
    const state = useSelector(state => state)
    console.log(state);
    return (
        <Layout>
            Shop
        </Layout>
    )
}
