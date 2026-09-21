"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTransactions } from "@/hooks/use-transactions"
import { Trash2 } from "lucide-react"

export function TransactionList() {
    const { transactions, deleteTransaction } = useTransactions()

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pr-2">
                <div className="space-y-4">
                    {transactions.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            No transactions yet. Add one to get started.
                        </p>
                    ) : (
                        transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="font-medium leading-none">
                                        {transaction.description}
                                    </p>
                                    <div className="text-sm text-muted-foreground flex gap-2">
                                        <span className="capitalize">{transaction.category}</span>
                                        <span>•</span>
                                        <span>{new Date(transaction.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`font-bold ${transaction.type === "Income"
                                                ? "text-emerald-600 dark:text-emerald-400"
                                                : "text-red-600 dark:text-red-400"
                                            }`}
                                    >
                                        {transaction.type === "Income" ? "+" : "-"}₹
                                        {transaction.amount.toLocaleString()}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-muted-foreground hover:text-destructive"
                                        onClick={() => deleteTransaction(transaction.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
