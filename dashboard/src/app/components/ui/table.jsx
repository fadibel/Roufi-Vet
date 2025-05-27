// src/components/ui/table.jsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Table = ({ className, ...props }) => (
    <div className="w-full overflow-auto">
        <table className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
);

const TableHeader = ({ className, ...props }) => (
    <thead className={cn("[&_tr]:border-b", className)} {...props} />
);

const TableBody = ({ className, ...props }) => (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
);

const TableFooter = ({ className, ...props }) => (
    <tfoot
        className={cn("bg-muted/50 text-muted-foreground font-medium", className)}
        {...props}
    />
);

const TableRow = ({ className, ...props }) => (
    <tr className={cn("border-b transition-colors hover:bg-muted/50", className)} {...props} />
);

const TableHead = ({ className, ...props }) => (
    <th
        className={cn(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            className
        )}
        {...props}
    />
);

const TableCell = ({ className, ...props }) => (
    <td
        className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
        {...props}
    />
);

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableCell,
};
