import { Moon, Sun, Github, Linkedin } from "lucide-react";
import { useTheme } from "../components/theme-provider";
import { Theme } from '../types/theme';

export default function FloatingBar() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <div className="fixed bottom-10 left-4 right-4 flex justify-center">
      <div className="border-2 w-44 flex items-center justify-around gap-4 px-2 py-3 rounded-md bg-white dark:bg-black shadow-lg transition-all hover:shadow-xl hover:scale-105">
        
        <button onClick={() => handleThemeChange('dark')}>
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 block dark:hidden" />
        </button>
        <button onClick={() => handleThemeChange('light')}>
          <Moon className="h-[1.2rem] w-[1.2rem] text-gray-300 hidden dark:block" />
        </button>

        <Github className="h-[1.2rem] w-[1.2rem]" />
        <Linkedin className="h-[1.2rem] w-[1.2rem]" />
      </div>
    </div>
  );
}
