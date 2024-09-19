import Toast from "./components/Toast";
import { showToast } from "./showToast";

function App() {
    return (
        <div className="h-screen flex flex-col text-center align-middle justify-center">
            <div>
                <h1 className="text-5xl font-bold mb-10">React Event Bus Toast Example</h1>
                <button
                    className="inline-block rounded-lg font-medium p-3 bg-slate-500 hover:bg-slate-700 text-white transition-all"
                    onClick={() => showToast("This is a toast message!")}>
                    Show Toast
                </button>
            </div>
            <Toast />
        </div>
    );
}

export default App;
