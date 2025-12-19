import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import type { DateRange } from 'react-day-picker';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import { Controller } from 'react-hook-form';
import type { Control, FieldValues, Path } from 'react-hook-form';

type RHFDateRangePickerProps<T extends FieldValues = FieldValues> = Omit<
  ComponentProps<typeof Calendar>,
  'selected' | 'onSelect' | 'mode'
> & {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: {
    from?: string;
    to?: string;
  };
  required?: boolean;
  error?: string;
  disabled?: boolean;
  disabledPast?: boolean;
  disabledFuture?: boolean;
  onDisabled?: (date: Date) => boolean;
  className?: ComponentProps<'div'>['className'];
  callback?: (value: DateRange | undefined) => void;
};

export default function RHFDateRangePicker<T extends FieldValues = FieldValues>({
  control,
  name,
  label,
  placeholder = { from: 'From date', to: 'To date' },
  required,
  error,
  disabled,
  disabledPast = false,
  disabledFuture = false,
  onDisabled,
  className,
  callback = () => {},
  ...calendarProps
}: RHFDateRangePickerProps<T>) {
  const [open, setOpen] = useState(false);

  const handleCheckDisabled = (date: Date) => {
    if (disabled) return true;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);

    if (disabledPast && compareDate < today) {
      return true;
    }

    if (disabledFuture && compareDate > today) {
      return true;
    }

    return onDisabled ? onDisabled(date) : false;
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error: fieldError } }) => {
        const displayError = error || fieldError?.message;
        const range = field.value as DateRange | undefined;

        return (
          <div className={cn('space-y-1.5 w-full', className)}>
            {label && (
              <Label className="text-foreground leading-5 block">
                {label} {required && <span className="font-semibold text-destructive">*</span>}
              </Label>
            )}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  disabled={disabled}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !range?.from && 'text-muted-foreground',
                    displayError && 'border-destructive',
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {range?.from ? (
                    range.to ? (
                      <>
                        {format(range.from, 'LLL dd, y')} - {format(range.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(range.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>
                      {placeholder.from} - {placeholder.to}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={range?.from}
                  selected={range}
                  onSelect={(range) => {
                    field.onChange(range);
                    callback(range);
                  }}
                  numberOfMonths={2}
                  disabled={handleCheckDisabled}
                  {...calendarProps}
                />
              </PopoverContent>
            </Popover>
            {displayError && <p className="text-xs text-destructive mt-1.5">{displayError}</p>}
          </div>
        );
      }}
    />
  );
}
