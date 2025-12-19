"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import type { ComponentProps } from "react"

type ComboboxOption = {
  id: string | number
  code?: string
  name: string
  disabled?: boolean
}

type ComboboxProps = {
  options: ComboboxOption[]
  value?: string | number
  onChange?: (value: string | number, option: ComboboxOption | undefined) => void
  label?: string | React.ReactNode
  error?: string
  required?: boolean
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  className?: ComponentProps<'div'>['className']
  triggerClassName?: ComponentProps<typeof Button>['className']
  popoverClassName?: ComponentProps<typeof PopoverContent>['className']
}

function Combobox({
  options,
  value,
  onChange,
  label,
  error,
  required,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  disabled = false,
  className,
  triggerClassName,
  popoverClassName,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const selectedOption = React.useMemo(
    () => options.find((opt) => opt.id === value),
    [options, value]
  )

  const handleSelect = (option: ComboboxOption) => {
    onChange?.(option.id, option)
    setOpen(false)
  }

  const triggerElement = (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between",
            !value && "text-muted-foreground",
            error && "border-destructive",
            triggerClassName
          )}
        >
          {selectedOption ? selectedOption.name : placeholder}
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-full p-0", popoverClassName)} align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.name}
                  disabled={option.disabled}
                  onSelect={() => handleSelect(option)}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )

  if (!label && !error) {
    return <div className={cn("w-full", className)}>{triggerElement}</div>
  }

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <Label className="text-foreground leading-5 block">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <div className={label ? "mt-1" : ""}>{triggerElement}</div>
      {error && (
        <div className="text-destructive text-sm mt-1.5" role="alert">
          {error}
        </div>
      )}
    </div>
  )
}

export { Combobox, type ComboboxOption }

