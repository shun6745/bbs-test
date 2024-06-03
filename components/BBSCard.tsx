import React from "react";
import {
    Card, 
    CardContent, 
    CardDescription,
    CardFooter,
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";
import Link from "next/link";
// タブで　インポート


const BBSCard = () => {
  return (
    <div>
      <Card >
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* lorem　タブ補間 */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ipsum iste minima provident molestias sequi reprehenderit soluta voluptatem magnam ducimus! Maiores atque magni officia eos qui vel, expedita unde. Similique.
      </CardContent>
      <CardFooter className="flex justify-between text">
        <Link href={"/"} className="text-blue-500">
          Readmor 
        </Link>
      </CardFooter>
      </Card>


    </div>
  )
}

export default BBSCard;

//ひな型 rafce

