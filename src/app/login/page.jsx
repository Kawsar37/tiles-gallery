"use client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function LogInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const path = usePathname();

  const signIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { email, password } = formData;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: path == "/login" ? "/" : path,
    });

    if (error) {
      toast(error.message);
    }

    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex justify-center items-center my-20 lg:my-30 ">
      <Form
        className="flex ring-1 ring-slate-200 rounded-lg w-85 sm:w-96 flex-col gap-4 p-4"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full max-w-70"
              type={isVisible ? "text" : "password"}
              placeholder="Password"
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <Description>Must be at least 8 characters</Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Log In
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <Description className="text-center">
          Don't Have an account ?{" "}
          <Link className="text-blue-400" href={"/register"}>
            Register Now
          </Link>
        </Description>
        <p className="text-center text-sm font-semibold">Or</p>
        <Button className="w-full" variant="tertiary" onClick={signIn}>
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
      </Form>
    </div>
  );
}
