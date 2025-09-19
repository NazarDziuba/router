import Routers from "./components/Routes and Links/Routes.jsx"
import Header from "./components/header.jsx"

export default function App() {
    return (
        <main>
            <Header />
            <div className="divs-container">
            <Routers />
            </div>
        </main>
    )
}