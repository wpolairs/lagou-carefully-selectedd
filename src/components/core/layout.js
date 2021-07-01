import Navigation from "./Navigation";

export default function layout({children}) {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}
