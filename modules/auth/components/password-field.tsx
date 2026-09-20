"use client"

import { EyeIcon, EyeOffIcon } from "lucide-react"

import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { PasswordFieldProps } from "../types"
import { cn } from "cn"
import { useState } from "react"

export function PasswordField({
  id = "Password",
  label,
  placeholder,
  className,
  ...props
}: PasswordFieldProps) {

  const [type, setType] = useState<"password" | "text">("password");

  const togglePassword = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <Field className={cn("max-w-md", className)}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <InputGroup>
        <InputGroupInput
          id={id}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        <InputGroupAddon align="inline-end" onClick={togglePassword} className="cursor-pointer">
          {type === "password" ? <EyeOffIcon /> : <EyeIcon />}
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
