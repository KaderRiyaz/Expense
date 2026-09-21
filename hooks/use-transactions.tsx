"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export type TransactionType = "Income" | "Expense"

export interface Transaction {
    id: string
    amount: number
    description: string
    type: TransactionType
    category: string
    date: string
}

interface TransactionsContextType {
    transactions: Transaction[]
    addTransaction: (transaction: Omit<Transaction, "id" | "date">) => void
    deleteTransaction: (id: string) => void
    summary: {
        totalBalance: number
        totalIncome: number
        totalExpense: number
    }
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined)

export function TransactionsProvider({ children }: { children: React.ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        const saved = localStorage.getItem("transactions")
        if (saved) {
            try {
                setTransactions(JSON.parse(saved))
            } catch (e) {
                console.error("Failed to parse transactions", e)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])

    const addTransaction = (data: Omit<Transaction, "id" | "date">) => {
        const newTransaction: Transaction = {
            ...data,
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
        }
        setTransactions((prev) => [newTransaction, ...prev])
    }

    const deleteTransaction = (id: string) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id))
    }

    const summary = transactions.reduce(
        (acc, curr) => {
            if (curr.type === "Income") {
                acc.totalIncome += curr.amount
                acc.totalBalance += curr.amount
            } else {
                acc.totalExpense += curr.amount
                acc.totalBalance -= curr.amount
            }
            return acc
        },
        { totalBalance: 0, totalIncome: 0, totalExpense: 0 }
    )

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                addTransaction,
                deleteTransaction,
                summary,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)
    if (context === undefined) {
        throw new Error("useTransactions must be used within a TransactionsProvider")
    }
    return context
}
