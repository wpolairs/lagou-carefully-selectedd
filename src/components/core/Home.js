import { useSelector } from "react-redux";
import Layout from "./layout";

export default function Home() {
    const state = useSelector(state => state)
    return (
        <Layout>
            Home {JSON.stringify(state)}
        </Layout>
    )
}