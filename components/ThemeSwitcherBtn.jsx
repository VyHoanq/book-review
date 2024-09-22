'use client'
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcherBtn() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Ensure the component is mounted before rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className="text-green-700 dark:text-green-400"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
    );
}
