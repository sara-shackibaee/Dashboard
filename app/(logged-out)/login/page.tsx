
"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import * as z from 'zod'
const formSchema = z.object({
  email: z.string(),
  password: z.string()

})
export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const handleSubmit = () => {

  }
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            Login
          </CardTitle>
          <CardDescription>
            Login to Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>

            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input placeholder="shackibaees@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      please enter your email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      please enter your password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>

          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>dont have an account?</small>
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href={"/sign-up"}>Sign up</Link>
          </Button>
        </CardFooter>
      </Card>

    </>
  )
}