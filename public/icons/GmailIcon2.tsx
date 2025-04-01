import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const GmailIcon = ({
  size,
  className,
  ...props
}: ComponentPropsWithoutRef<"svg"> & { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      preserveAspectRatio="xMidYMid"
      style={{ width: size, height: size }}
      className={cn("h-full w-full", className)}
      viewBox="-13.2 -16.50405 114.4 99.0243"
      {...props}
    >
      <path
        //   fill="#4285f4"
        d="M6 66.0162h14v-34l-20-15v43c0 3.315 2.685 6 6 6z"
      />
      <path
        // fill="#34a853"
        d="M68 66.0162h14c3.315 0 6-2.685 6-6v-43l-20 15z"
      />
      <path
        //   fill="#fbbc04"
        d="M68 6.0162v26l20-15v-8c0-7.415-8.465-11.65-14.4-7.2z"
      />
      <path
        // fill="#ea4335"
        d="M20 32.0162v-26l24 18 24-18v26l-24 18z"
      />
      <path
        //   fill="#c5221f"
        d="M0 9.0162v8l20 15v-26l-5.6-4.2c-5.935-4.45-14.4-.215-14.4 7.2z"
      />
      <path
        fill="currentColor"
        d="M6 66.0162h14v-34l-20-15v43c0 3.315 2.685 6 6 6z M68 66.0162h14c3.315 0 6-2.685 6-6v-43l-20 15z M68 6.0162v26l20-15v-8c0-7.415-8.465-11.65-14.4-7.2z M20 32.0162v-26l24 18 24-18v26l-24 18z M0 9.0162v8l20 15v-26l-5.6-4.2c-5.935-4.45-14.4-.215-14.4 7.2z"
      />
    </svg>
  );
};
