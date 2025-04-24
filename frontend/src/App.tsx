import DarkModeToggleButton from "./components/darkModeToggleButton";
import useDarkMode from "./useDarkMode";

function App() {
    const { toggle } = useDarkMode();
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <DarkModeToggleButton toggle={toggle} />
            <div className="bg-amber-300 dark:bg-amber-700 p-4 rounded-lg shadow-lg w-full h-full min-h-200">
                <h1>hello world</h1>
            </div>
        </div>
    );
}

export default App;
