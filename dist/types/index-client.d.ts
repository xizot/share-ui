import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { DateRange } from 'react-day-picker';
import { DayButton } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import { DayPickerRangeProps } from 'react-day-picker';
import { DayPickerSingleProps } from 'react-day-picker';
import { default as default_2 } from 'embla-carousel-react';
import { Drawer as Drawer_2 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { JSX } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Locale } from 'date-fns';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React_2 from 'react';
import * as RechartsPrimitive from 'recharts';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import { VariantProps } from 'class-variance-authority';

declare function Button({ className, variant, size, asChild, ...props }: React_2.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): JSX.Element;

export declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>): JSX.Element;

export declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): JSX.Element;

export declare function ButtonGroupText({ className, asChild, ...props }: React.ComponentProps<'div'> & {
    asChild?: boolean;
}): JSX.Element;

export declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & ClassProp) | undefined) => string;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "2xl" | "icon" | "icon-xxs" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl" | "icon-xxl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React_2.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React_2.ComponentProps<typeof Button>['variant'];
}): JSX.Element;

export declare function CalendarDayButton({ className, day, modifiers, ...props }: React_2.ComponentProps<typeof DayButton>): JSX.Element;

export declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React_2.ComponentProps<'div'> & CarouselProps): JSX.Element;

export declare type CarouselApi = UseEmblaCarouselType[1];

export declare function CarouselContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CarouselItem({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CarouselNext({ className, variant, size, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

declare type CarouselOptions = UseCarouselParameters[0];

declare type CarouselPlugin = UseCarouselParameters[1];

export declare function CarouselPrevious({ className, variant, size, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};

export declare type ChartConfig = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

export declare function ChartContainer({ id, className, children, config, ...props }: React_2.ComponentProps<'div'> & {
    config: ChartConfig;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
}): JSX.Element;

export declare const ChartLegend: typeof RechartsPrimitive.Legend;

export declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React_2.ComponentProps<'div'> & Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean;
    nameKey?: string;
}): JSX.Element | null;

export declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => JSX.Element | null;

export declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;

export declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React_2.ComponentProps<typeof RechartsPrimitive.Tooltip> & React_2.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
}): JSX.Element | null;

export declare function Combobox<TOptions extends readonly ComboboxBaseOption[]>({ options, value, onChange, label, error, required, placeholder, searchPlaceholder, emptyMessage, disabled, readonly, size, showClearIcon, showArrowIcon, suffix, className, triggerClassName, popoverClassName, }: ComboboxProps<TOptions>): JSX.Element;

export declare type ComboboxBaseOption = {
    id: string;
    code?: string | number;
    name: string;
    disabled?: boolean;
};

export declare type ComboboxOnChange<T extends ComboboxBaseOption> = (value: string, option: T | undefined) => void;

export declare type ComboboxOption = ComboboxBaseOption;

export declare type ComboboxProps<TOptions extends readonly ComboboxBaseOption[]> = {
    options: TOptions;
    value?: ComboboxValue;
    onChange?: ComboboxOnChange<TOptions[number]>;
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    size?: FormSize;
    showClearIcon?: boolean;
    showArrowIcon?: boolean;
    suffix?: React_2.ReactNode;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};

export declare type ComboboxValue = string | number;

export declare function ContextMenu({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Root>): JSX.Element;

export declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>): JSX.Element;

export declare function ContextMenuContent({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Content>): JSX.Element;

export declare function ContextMenuGroup({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Group>): JSX.Element;

export declare function ContextMenuItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): JSX.Element;

export declare function ContextMenuLabel({ className, inset, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function ContextMenuPortal({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Portal>): JSX.Element;

export declare function ContextMenuRadioGroup({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): JSX.Element;

export declare function ContextMenuRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.RadioItem>): JSX.Element;

export declare function ContextMenuSeparator({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Separator>): JSX.Element;

export declare function ContextMenuShortcut({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function ContextMenuSub({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Sub>): JSX.Element;

export declare function ContextMenuSubContent({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.SubContent>): JSX.Element;

export declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function ContextMenuTrigger({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Trigger>): JSX.Element;

export declare function DatePicker({ value, onChange, placeholder, dateFormat, showTime, timeOnly, mode, label, error, required, disabled, disabledPast, disabledFuture, onDisabled, size, className, triggerClassName, popoverClassName, locale, cancelText, applyText, monthNames, ...calendarProps }: DatePickerProps): JSX.Element;

export declare type DatePickerProps = Omit<DayPickerSingleProps, 'selected' | 'onSelect' | 'mode' | 'required'> & {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    dateFormat?: string;
    showTime?: boolean;
    timeOnly?: boolean;
    mode?: 'single' | 'month';
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    onDisabled?: (date: Date) => boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
    locale?: string | Locale;
    cancelText?: string;
    applyText?: string;
    monthNames?: string[];
};

export declare function DateRangePicker({ value, onChange, placeholder, dateFormat, presets, showPresets, label, error, required, disabled, disabledPast, disabledFuture, onDisabled, size, className, triggerClassName, popoverClassName, locale, cancelText, applyText, ...calendarProps }: DateRangePickerProps): JSX.Element;

export declare type DateRangePickerProps = Omit<DayPickerRangeProps, 'selected' | 'onSelect' | 'mode' | 'required'> & {
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: {
        from?: string;
        to?: string;
    };
    dateFormat?: string;
    presets?: DateRangePreset[];
    showPresets?: boolean;
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    onDisabled?: (date: Date) => boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
    locale?: string | Locale;
    cancelText?: string;
    applyText?: string;
};

export declare type DateRangePreset = {
    label: string;
    range: DateRange;
};

export declare function Drawer({ ...props }: React_2.ComponentProps<typeof Drawer_2.Root>): JSX.Element;

export declare function DrawerClose({ ...props }: React_2.ComponentProps<typeof Drawer_2.Close>): JSX.Element;

export declare function DrawerContent({ className, children, ...props }: React_2.ComponentProps<typeof Drawer_2.Content>): JSX.Element;

export declare function DrawerDescription({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Description>): JSX.Element;

export declare function DrawerFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function DrawerHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function DrawerOverlay({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Overlay>): JSX.Element;

export declare function DrawerPortal({ ...props }: React_2.ComponentProps<typeof Drawer_2.Portal>): JSX.Element;

export declare function DrawerTitle({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Title>): JSX.Element;

export declare function DrawerTrigger({ ...props }: React_2.ComponentProps<typeof Drawer_2.Trigger>): JSX.Element;

export declare function DropdownMenu({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Root>): JSX.Element;

export declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): JSX.Element;

export declare function DropdownMenuContent({ className, sideOffset, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Content>): JSX.Element;

export declare function DropdownMenuGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Group>): JSX.Element;

export declare function DropdownMenuItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): JSX.Element;

export declare function DropdownMenuLabel({ className, inset, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuPortal({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Portal>): JSX.Element;

export declare function DropdownMenuRadioGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): JSX.Element;

export declare function DropdownMenuRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): JSX.Element;

export declare function DropdownMenuSeparator({ className, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Separator>): JSX.Element;

export declare function DropdownMenuShortcut({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function DropdownMenuSub({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Sub>): JSX.Element;

export declare function DropdownMenuSubContent({ className, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): JSX.Element;

export declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuTrigger({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): JSX.Element;

export declare function Empty({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyContent({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>): JSX.Element;

export declare function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>): JSX.Element;

declare const emptyMediaVariants: (props?: ({
    variant?: "default" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function Field({ className, orientation, ...props }: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>): JSX.Element;

export declare function FieldContent({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function FieldDescription({ className, ...props }: React.ComponentProps<'p'>): JSX.Element;

export declare function FieldError({ className, children, errors, ...props }: React.ComponentProps<'div'> & {
    errors?: Array<{
        message?: string;
    } | undefined>;
}): JSX.Element | null;

export declare function FieldGroup({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>): JSX.Element;

export declare function FieldLegend({ className, variant, ...props }: React.ComponentProps<'legend'> & {
    variant?: 'legend' | 'label';
}): JSX.Element;

export declare function FieldSeparator({ children, className, ...props }: React.ComponentProps<'div'> & {
    children?: React.ReactNode;
}): JSX.Element;

export declare function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>): JSX.Element;

export declare function FieldTitle({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

declare const fieldVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | "responsive" | null | undefined;
} & ClassProp) | undefined) => string;

declare type FormSize = VariantProps<typeof formSizeVariants>['size'];

/**
 * Form component size variants
 * All form components should use these sizes for consistency
 */
declare const formSizeVariants: (props?: ({
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function HoverCard({ ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Root>): JSX.Element;

export declare function HoverCardContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Content>): JSX.Element;

export declare function HoverCardTrigger({ ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Trigger>): JSX.Element;

declare function Input({ className, type, label, error, required, id, size, ...props }: InputProps): JSX.Element;

export declare function InputGroup({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function InputGroupAddon({ className, align, ...props }: React_2.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>): JSX.Element;

declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React_2.ComponentProps<typeof Button>, 'size'> & VariantProps<typeof inputGroupButtonVariants>): JSX.Element;

declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function InputGroupInput({ className, ...props }: Omit<React_2.ComponentProps<'input'>, 'size'>): JSX.Element;

export declare function InputGroupText({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function InputGroupTextarea({ className, ...props }: React_2.ComponentProps<'textarea'>): JSX.Element;

declare interface InputProps extends Omit<React_2.ComponentProps<'input'>, 'type' | 'size'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    type?: React_2.ComponentProps<'input'>['type'];
    size?: FormSize;
}

export declare function Item({ className, variant, size, asChild, ...props }: React_2.ComponentProps<'div'> & VariantProps<typeof itemVariants> & {
    asChild?: boolean;
}): JSX.Element;

export declare function ItemActions({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemDescription({ className, ...props }: React_2.ComponentProps<'p'>): JSX.Element;

export declare function ItemFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemGroup({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemMedia({ className, variant, ...props }: React_2.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>): JSX.Element;

declare const itemMediaVariants: (props?: ({
    variant?: "default" | "image" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function ItemSeparator({ className, ...props }: React_2.ComponentProps<typeof Separator>): JSX.Element;

export declare function ItemTitle({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

declare const itemVariants: (props?: ({
    variant?: "default" | "outline" | "muted" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

declare function Label({ className, ...props }: React_2.ComponentProps<typeof LabelPrimitive.Root>): JSX.Element;

export declare function MonthPicker({ value, onChange, locale, monthNames, disabled, className, }: MonthPickerProps): JSX.Element;

export declare type MonthPickerProps = {
    value?: Date;
    onChange: (date: Date | undefined) => void;
    locale?: string | Locale;
    monthNames?: string[];
    disabled?: (date: Date) => boolean;
    className?: string;
};

export declare function MultipleCombobox<TOptions extends readonly MultipleComboboxBaseOption[]>({ options, value, onChange, autoResize, limitTags, showCode, label, error, required, placeholder, searchPlaceholder, emptyMessage, disabled, readonly, size, className, triggerClassName, popoverClassName, }: MultipleComboboxProps<TOptions>): JSX.Element;

export declare type MultipleComboboxBaseOption = {
    id: string;
    code?: string | number;
    name: string;
    disabled?: boolean;
};

export declare type MultipleComboboxOnChange<T extends MultipleComboboxBaseOption> = (values: MultipleComboboxValue, options: T[] | undefined) => void;

export declare type MultipleComboboxProps<TOptions extends readonly MultipleComboboxBaseOption[]> = {
    options: TOptions;
    value?: MultipleComboboxValue;
    onChange?: MultipleComboboxOnChange<TOptions[number]>;
    autoResize?: boolean;
    limitTags?: number;
    showCode?: boolean;
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};

export declare type MultipleComboboxValue = string[];

export declare function Popover({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Root>): JSX.Element;

export declare function PopoverAnchor({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Anchor>): JSX.Element;

export declare function PopoverContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Content>): JSX.Element;

export declare function PopoverTrigger({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Trigger>): JSX.Element;

export declare function ScrollArea({ className, children, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.Root>): JSX.Element;

export declare function ScrollBar({ className, orientation, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React_2.ComponentProps<typeof SeparatorPrimitive.Root>): JSX.Element;

export declare function Sheet({ ...props }: React_2.ComponentProps<typeof SheetPrimitive.Root>): JSX.Element;

export declare function SheetClose({ ...props }: React_2.ComponentProps<typeof SheetPrimitive.Close>): JSX.Element;

export declare function SheetContent({ className, children, side, ...props }: React_2.ComponentProps<typeof SheetPrimitive.Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): JSX.Element;

export declare function SheetDescription({ className, ...props }: React_2.ComponentProps<typeof SheetPrimitive.Description>): JSX.Element;

export declare function SheetFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SheetHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SheetTitle({ className, ...props }: React_2.ComponentProps<typeof SheetPrimitive.Title>): JSX.Element;

export declare function SheetTrigger({ ...props }: React_2.ComponentProps<typeof SheetPrimitive.Trigger>): JSX.Element;

export declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React_2.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
}): JSX.Element;

export declare function SidebarContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

declare type SidebarContextProps = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};

export declare function SidebarFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarGroup({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarGroupAction({ className, asChild, ...props }: React_2.ComponentProps<'button'> & {
    asChild?: boolean;
}): JSX.Element;

export declare function SidebarGroupContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarGroupLabel({ className, asChild, ...props }: React_2.ComponentProps<'div'> & {
    asChild?: boolean;
}): JSX.Element;

export declare function SidebarHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarInput({ className, ...props }: React_2.ComponentProps<typeof Input>): JSX.Element;

export declare function SidebarInset({ className, ...props }: React_2.ComponentProps<'main'>): JSX.Element;

export declare function SidebarMenu({ className, ...props }: React_2.ComponentProps<'ul'>): JSX.Element;

export declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React_2.ComponentProps<'button'> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): JSX.Element;

export declare function SidebarMenuBadge({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React_2.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React_2.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): JSX.Element;

declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function SidebarMenuItem({ className, ...props }: React_2.ComponentProps<'li'>): JSX.Element;

export declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React_2.ComponentProps<'div'> & {
    showIcon?: boolean;
}): JSX.Element;

export declare function SidebarMenuSub({ className, ...props }: React_2.ComponentProps<'ul'>): JSX.Element;

export declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React_2.ComponentProps<'a'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}): JSX.Element;

export declare function SidebarMenuSubItem({ className, ...props }: React_2.ComponentProps<'li'>): JSX.Element;

export declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React_2.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): JSX.Element;

export declare function SidebarRail({ className, ...props }: React_2.ComponentProps<'button'>): JSX.Element;

export declare function SidebarSeparator({ className, ...props }: React_2.ComponentProps<typeof Separator>): JSX.Element;

export declare function SidebarTrigger({ className, onClick, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare function TimePicker({ value, onChange, showSeconds, className }: TimePickerProps): JSX.Element;

export declare type TimePickerProps = {
    value: TimeValue;
    onChange: (value: TimeValue) => void;
    showSeconds?: boolean;
    className?: string;
};

export declare type TimeValue = {
    hour: string;
    minute: string;
    second: string;
};

export declare function Toggle({ className, variant, size, ...props }: React_2.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): JSX.Element;

export declare function ToggleGroup({ className, variant, size, spacing, children, ...props }: React_2.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants> & {
    spacing?: number;
}): JSX.Element;

export declare function ToggleGroupItem({ className, children, variant, size, ...props }: React_2.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>): JSX.Element;

export declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Tooltip({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Root>): JSX.Element;

export declare function TooltipContent({ className, sideOffset, children, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Content>): JSX.Element;

export declare function TooltipProvider({ delayDuration, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Provider>): JSX.Element;

export declare function TooltipTrigger({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Trigger>): JSX.Element;

declare type UseCarouselParameters = Parameters<typeof default_2>;

export declare function useSidebar(): SidebarContextProps;

export { }
