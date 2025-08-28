import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2Icon, UserIcon } from "lucide-react";
import Link from "next/link";
import TeamContent from "./team_content";

export default function TeamState() {



    return (<>


        <>
            <div className="grid lg:grid-cols-3 gap-4">

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Total Team</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <UserIcon />
                            <span className="text-5xl font-bold">10</span>
                        </div>
                        <div>
                            <Button size={"sm"} asChild>
                                <Link href={"/dashboard/employees"}>view all</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Team Peresent</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2 items-center">
                            <UserCheck2Icon />
                            <span className="text-5xl font-bold">90</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <span className="flex gap-2 text-green-500"><BadgeCheckIcon />80% of team are present</span>
                    </CardFooter>
                </Card>
                <Card className="border-pink-500"> <CardHeader>
                    <CardTitle className="text-base">Teams  Of The Month</CardTitle>

                </CardHeader>
                    <CardContent>
                        <div className="flex gap-2 items-center">
                            <Avatar>
                                <AvatarFallback className="bg-pink-500 rounded p-2">sm</AvatarFallback>
                            </Avatar>
                            <span className="text-2xl font-bold">Collin Murray</span>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <span className="flex gap-2 text-yellow-500"><PartyPopperIcon />congragulations,collin </span>
                    </CardFooter>

                </Card>
            </div>
            <Card className="my-4"> <CardHeader>
                <CardTitle className="text-base flex gap-1">
                    <LaptopIcon />

                    <span>team  work location place</span>
                </CardTitle>

            </CardHeader>
                <CardContent>
                    <TeamContent />
                  
                </CardContent>


            </Card>
        </>

    </>)
}