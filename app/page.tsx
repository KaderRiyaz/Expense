"use client"

import { useState, useEffect } from "react"
import { Overview } from "@/components/Overview"
import { ThemeToggle } from "@/components/ThemeToggle"
import { TransactionForm } from "@/components/TransactionForm"
import { TransactionList } from "@/components/TransactionList"
import { TransactionsProvider } from "@/hooks/use-transactions"

export default function Home() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning")
    else if (hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  return (
    <TransactionsProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">₹</span>
              </div>
              <h1 className="font-heading text-xl font-bold tracking-tight">
                Expensive Tracker
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground mt-1">
                {greeting}, <span className="font-semibold text-foreground">Kader Riyaz</span>
              </p>
            </div>
            <Overview />
          </section>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5 xl:col-span-4">
              <TransactionForm />
            </div>
            <div className="lg:col-span-7 xl:col-span-8">
              <TransactionList />
            </div>
          </div>
        </main>
      </div>
    </TransactionsProvider>
  )
}
