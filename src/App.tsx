import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Quiz from "./components/Quiz";

export default function MyApp() {
    return (
        <div className="w-full">
            <NavBar />
            <Banner />
            <Quiz />
        </div>
    );
}
