"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Check initial theme preference
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            document.documentElement.classList.add("dark")
            localStorage.theme = "dark"
        } else {
            setTheme("light")
            document.documentElement.classList.remove("dark")
            localStorage.theme = "light"
        }
    }

    if (!mounted) {
        return <Button variant="ghost" size="icon" className="rounded-full w-9 h-9" />
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "light" ? (
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            ) : (
                <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
