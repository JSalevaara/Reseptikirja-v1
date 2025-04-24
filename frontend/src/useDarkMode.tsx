import { useEffect, useState } from "react";

const DARK_MODE_KEY = "dark-mode";

const prefersDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const useDarkMode = () => {
    const [enabled, setEnabled] = useState(() => {
        const savedDarkMode = localStorage.getItem(DARK_MODE_KEY);
        return savedDarkMode ? savedDarkMode === "true" : prefersDarkMode();
    });

    useEffect(() => {
        const rootDoc = document.documentElement.classList;
        localStorage.setItem(DARK_MODE_KEY, enabled.toString());
        if (enabled) {
            rootDoc.add("dark");
        } else {
            rootDoc.remove("dark");
        }
    });
    const toggle = () => setEnabled((prev) => !prev);
    return { enabled, toggle };
};

export default useDarkMode;
