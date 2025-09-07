import { useTheme } from "../hooks/useTheme.jsx";

export default function ToggleTheme() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="flex items-center gap-3 max-sm:justify-between max-sm:w-full px-2">
      <span className="text-LightToggleGray font-semibold transition-colors duration-300">
        Dark Mode
      </span>

      {/* Toggle Switch */}
      <button
        onClick={toggleTheme}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300
          ${
            theme === "light"
              ? "bg-LightToggleGray"
              : "bg-gradient-to-r from-[hsl(210,79%,56%)] to-[hsl(146,68%,55%)]"
          }
        `}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full  shadow-md transform transition-transform duration-300
            ${
              theme === "light"
                ? "translate-x-6 bg-white"
                : "translate-x-0 bg-TopBgGray"
            }
          `}
        />
      </button>
    </div>
  );
}
