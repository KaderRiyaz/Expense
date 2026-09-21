import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from "@/components/ui/input"
import UndoArrow from "@/components/svgimage/undoarrow"
import { Textarea } from "@/components/ui/textarea"



function page() {
    return (
        <div className="font-nunito" style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "90%", height: "90%", display: "flex" }}>
                <div style={{ width: "70%", height: "100%" }}>

                </div>
                <Card className={"rounded-sm border"} style={{ width: "30%", height: "100%" }}>
                    <CardHeader>
                        <CardTitle>Expense Tracker</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div style={{fontSize:"30px"}}>
                            <span style={{color:"grey"}}>₹</span>
                            <span className="font-nunito" style={{color:"green"}}>22,000</span>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap:"10px"}}>
                            <Input type="text" placeholder="Amount" />
                            <Textarea placeholder="Type your remarks here..." />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default page