import * as React from 'react';
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from './empty';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface EmptyStateProps extends React.ComponentProps<typeof Empty> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

function EmptyState({
  className,
  icon,
  title = 'No data',
  description,
  action,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <Empty className={cn(className)} {...props}>
      <EmptyHeader>
        {icon && <EmptyMedia variant="icon">{icon}</EmptyMedia>}
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
      {children && <EmptyContent>{children}</EmptyContent>}
      {action && (
        <Button onClick={action.onClick} variant="outline">
          {action.label}
        </Button>
      )}
    </Empty>
  );
}

export { EmptyState };
