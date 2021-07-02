import { PageHeader } from "antd";
import Navigation from "./Navigation";

export default function layout({children, title, subTitle}) {
    return (
        <div>
            <Navigation />
            <PageHeader
                className="jumbotron"
                title={title}
                subTitle={subTitle}
            />
            <div style={{
                width: '85%',
                margin: '0 auto'
            }}>
                {children}
            </div>
        </div>
    )
}
