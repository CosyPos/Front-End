"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <main className="justify-center text-center bg-[#101314] h-screen w-full p-0 text-[#FEB7D8] flex font-sans">
      <div className="content mt-14">
        <h2 className="text-[40px] font-extrabold">COSYPOS</h2>
        <div className="container h-[570px] w-[400px] bg-[#282D2D] p-6 rounded-[20px] mt-14 px-[100px] justify-center items-center md:w-[600px]">
          <h3 className="text-[32px] font-semibold mt-14">Login!</h3>
          <p className="text-sm mb-6 mt-3">
            Please enter your credentials below to continue
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 text-left"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Username</FormLabel>
                    <FormControl className="w-full ">
                      <Input
                        className="flex w-full bg-[#3D4142] border-none px-4 py-7"
                        placeholder="Enter your username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Password</FormLabel>
                    <div className="relative">
                      <FormControl className="w-full">
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="flex w-full bg-[#3D4142] border-none px-4 py-7"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>

                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between md:text-sm text-[11px]">
                <div className="flex items-center gap-2 ">
                  <Checkbox id="remember" className="border-white" />
                  <Label htmlFor="remember" className="md:text-sm text-[11px]">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password">
                  <p className="text-[#FEB7D8] cursor-pointer underline">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              <div className="justify-center items-center flex">
                <Link href="/dashboard">
                  <Button
                    type="submit"
                    className="w-[120px] py-7 bg-white text-[#333333]"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
