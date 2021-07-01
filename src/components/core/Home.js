import { useSelector } from "react-redux";
import Layout from "./layout";

export default function Home() {
    const state = useSelector(state => state)
    console.log(state);
    return (
        <Layout>
            Home
        </Layout>
    )
}