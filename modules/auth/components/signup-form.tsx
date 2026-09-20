"use client";

import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { PasswordField } from "./password-field"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { SignupSchema } from "../validation";
import { useAuthStore } from "../store";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const { loading, username, password, confirmPassword, handleSignupSubmit } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username,
      password,
      confirmPassword,
    }
  });


  return (
    <form
      {...props}
      noValidate
      onSubmit={handleSubmit(handleSignupSubmit)}
      className={cn("flex flex-col gap-6", className)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-destructive">Create your account</h1>
          <p className="text-sm text-balance text-destructive/90">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            {...register('username')}
          />
          {errors.username && <Label className="text-destructive">{errors.username.message}</Label>}
        </Field>
        <Field>
          <PasswordField
            id="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && <Label className="text-destructive">{errors.password.message}</Label>}
        </Field>
        <Field>
          <PasswordField
            id="confirmPassword"
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <Label className="text-destructive">{errors.confirmPassword.message}</Label>}
        </Field>
        <Field>
          <Button loading={loading} type="submit">Create Account</Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="sign-in">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
