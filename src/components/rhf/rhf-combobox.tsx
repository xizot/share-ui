import { Combobox, type ComboboxOption } from "@/components/ui/combobox"
import { cn } from "@/lib/utils"
import { useFormState } from "react-hook-form"
import type { ComponentProps } from "react"
import { Controller } from "react-hook-form"
import type { Control, FieldValues, Path } from "react-hook-form"
import { get } from "@/lib/utils"

export type ComboboxBaseOption = ComboboxOption

type RHFComboboxProps<T extends FieldValues = FieldValues> = Omit<
  ComponentProps<typeof Combobox>,
  'value' | 'onChange' | 'label' | 'error' | 'required'
> & {
  control: Control<T>
  name: Path<T>
  label?: string
  required?: boolean
  callback?: (newValue: string | number, newOption: ComboboxOption | undefined) => void
}

export default function RHFCombobox<T extends FieldValues = FieldValues>({
  control,
  name,
  label,
  required,
  callback = () => {},
  className,
  ...comboboxProps
}: RHFComboboxProps<T>) {
  const formState = useFormState({ control, name })
  const displayError = get<string>(formState.errors, `${name}.message`)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Combobox
            {...comboboxProps}
            value={field.value}
            onChange={(value, option) => {
              field.onChange(value)
              callback(value, option)
            }}
            label={label}
            error={displayError}
            required={required}
            className={cn("w-full", className)}
          />
        )
      }}
    />
  )
}

