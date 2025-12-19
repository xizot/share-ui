import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  label?: string | React.ReactNode;
  error?: string;
  required?: boolean;
}

function Textarea({ className, label, error, required, id, ...props }: TextareaProps) {
  const hasLabelOrError = label || error;

  const textareaElement = (
    <textarea
      id={id}
      data-slot="textarea"
      aria-invalid={!!error}
      className={cn(
        'border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        error
          ? 'focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive'
          : 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  );

  if (!hasLabelOrError) {
    return textareaElement;
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      {textareaElement}
      {error && (
        <div className="text-destructive text-sm" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export { Textarea };
