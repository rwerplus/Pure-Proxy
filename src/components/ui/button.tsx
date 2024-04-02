import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/shared/utils';

const buttonVariants = cva(
  'fuiinline-flex fuiitems-center fuijustify-center fuiwhitespace-nowrap fuirounded-md fuitext-sm fuifont-medium fuiring-offset-background fuitransition-colors focus-visible:fuioutline-none focus-visible:fuiring-2 focus-visible:fuiring-ring focus-visible:fuiring-offset-2 disabled:fuipointer-events-none disabled:fuiopacity-50',
  {
    variants: {
      variant: {
        default: 'fuibg-primary fuitext-primary-foreground hover:fuibg-primary/90',
        destructive: 'fuibg-destructive fuitext-destructive-foreground hover:fuibg-destructive/90',
        outline: 'fuiborder fuiborder-input fuibg-background hover:fuibg-accent hover:fuitext-accent-foreground',
        secondary: 'fuibg-secondary fuitext-secondary-foreground hover:fuibg-secondary/80',
        ghost: 'hover:fuibg-accent hover:fuitext-accent-foreground',
        link: 'fuitext-primary fuiunderline-offset-4 hover:fuiunderline',
      },
      size: {
        default: 'fuih-10 fuipx-4 fuipy-2',
        sm: 'fuih-9 fuirounded-md fuipx-3',
        lg: 'fuih-11 fuirounded-md fuipx-8',
        icon: 'fuih-10 fuiw-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
