import './App.css';
import MainPage from "./components/MainPage";

///Contexts
import ContextProductsProvider from "./context/ContextProductsProvider";

function App() {
    return (
        <div className="App">
            <ContextProductsProvider>
                <MainPage/>
            </ContextProductsProvider>
        </div>
    );
}

export default App;
