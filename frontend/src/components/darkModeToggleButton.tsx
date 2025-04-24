interface DarkModeToggleButtonProps {
    toggle: () => void;
}

const DarkModeToggleButton = ({ toggle }: DarkModeToggleButtonProps) => {
    return (
        <button
            onClick={toggle}
            className="fixed top-4 lg:top-4 right-3 lg:rigth-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors">
            <i className="bx bx-moon text-lg lg:text-xl"> </i>
        </button>
    );
};

export default DarkModeToggleButton;
