"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTransactions } from "@/hooks/use-transactions"
import { ArrowDownIcon, ArrowUpIcon, WalletIcon } from "lucide-react"

export function Overview() {
    const { summary } = useTransactions()

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <WalletIcon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        ₹{summary.totalBalance.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                        Current available balance
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Income</CardTitle>
                    <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        +₹{summary.totalIncome.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                        Total incoming funds
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                    <ArrowDownIcon className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        -₹{summary.totalExpense.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                        Total outgoing funds
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
