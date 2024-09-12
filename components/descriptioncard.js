import React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardImage,
} from "@/components/ui/card"

import { HiLocationMarker, HiPhone } from "react-icons/hi";

export function CardWithForm() {
    return (
        // <Card className="w-[350px]">
        //     <CardHeader>
        //         <CardTitle>Create project</CardTitle>
        //         <CardDescription>Deploy your new project in one-click.</CardDescription>
        //     </CardHeader>
        //     <CardContent>
        //         <form>
        //             <div className="grid w-full items-center gap-4">
        //                 <div className="flex flex-col space-y-1.5">
        //                     <Label htmlFor="name">Name</Label>
        //                     <Input id="name" placeholder="Name of your project" />
        //                 </div>
        //                 <div className="flex flex-col space-y-1.5">
        //                     <Label htmlFor="framework">Framework</Label>
        //                     <Select>
        //                         <SelectTrigger id="framework">
        //                             <SelectValue placeholder="Select" />
        //                         </SelectTrigger>
        //                         <SelectContent position="popper">
        //                             <SelectItem value="next">Next.js</SelectItem>
        //                             <SelectItem value="sveltekit">SvelteKit</SelectItem>
        //                             <SelectItem value="astro">Astro</SelectItem>
        //                             <SelectItem value="nuxt">Nuxt.js</SelectItem>
        //                         </SelectContent>
        //                     </Select>
        //                 </div>
        //             </div>
        //         </form>
        //     </CardContent>
        //     <CardFooter className="flex justify-between">
        //         <Button variant="outline">Cancel</Button>
        //         <Button>Deploy</Button>
        //     </CardFooter>
        // </Card>

        <Card>
            <CardHeader>
                <CardImage src="/blank-profile-picture.png" alt="Profile Picture" />
                
            </CardHeader>
            
            <CardContent className="mt-20">
                <CardTitle>John Doe</CardTitle>
                <CardDescription>
                    <HiLocationMarker className="text-gray-500" />
                    <span>New York, NY</span>
                </CardDescription>
            </CardContent>
            <div className="border-t border-neutral-200 dark:border-neutral-800 my-2 mx-6"></div>
            <CardFooter >
                <CardDescription >
                    <HiPhone className="text-black-500" />
                    <span>90999 80888</span>
                </CardDescription>
                <Button >Fetch Details</Button>
               
            </CardFooter>
        </Card>
    )
}
