import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
interface TeamPageItemProps {
  // Add your props here
}

export const TeamPageItem: React.FC<TeamPageItemProps> = ({}) => {
  return (
    <Card className="w-full max-w-sm m-6 overflow-hidden p-0">
      <CardContent className="p-0">
        <div className="h-100">
          <img
            className="w-full h-full inset-0 object-cover rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1762438135827-428acc0e8941?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image of Club Executive"
          ></img>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 text-left items-start p-4">
        <h2 className="font-bold text-2xl">John Mayer</h2>
        <h3 className="font-bold text-gray-300">4th Year Communications</h3>
        <p className="font-semi-bold">
          Hello I am John, I'm a 4th Year Communications student at MRU, I like
          Playing Soccer and Baking
        </p>
      </CardFooter>
    </Card>
  );
};
{
  /* <div className="bg-amber-600 min-w-1/3 h-98">Test</div> */
}
