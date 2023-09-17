import './App.css';
import MainPage from "./components/MainPage";
import ContextProductsProvider from "./context/ContextProductsProvider";
import products from "./components/Products";

function App({props}) {
    return (
        <div className="App">
            <ContextProductsProvider>
                <MainPage/>
            </ContextProductsProvider>
        </div>
    );
}

export default App;
