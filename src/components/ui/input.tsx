import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

interface InputProps extends Omit<React.ComponentProps<"input">, "type"> {
  label?: string | React.ReactNode
  error?: string
  required?: boolean
  type?: React.ComponentProps<"input">["type"]
}

function Input({ 
  className, 
  type, 
  label, 
  error, 
  required,
  id,
  ...props 
}: InputProps) {
  const inputId = id || React.useId()
  const hasLabelOrError = label || error

  const inputElement = (
    <input
      type={type}
      id={inputId}
      data-slot="input"
      aria-invalid={!!error}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        error
          ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive"
          : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )

  if (!hasLabelOrError) {
    return inputElement
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      {inputElement}
      {error && (
        <div className="text-destructive text-sm" role="alert">
          {error}
        </div>
      )}
    </div>
  )
}

export { Input }
