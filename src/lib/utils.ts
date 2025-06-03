import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using `clsx` and merges them with Tailwind CSS classes using `twMerge`.
 *
 * @param inputs - Class values to be conditionally joined and merged.
 * @returns A single optimized class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

/**
 * Constructs a tenant-specific URL path using the provided tenant slug.
 *
 * @param tenantSlug - The unique identifier for the tenant.
 * @returns The URL path in the format `/tenants/{tenantSlug}`.
 */
export function generateTenantURL(tenantSlug: string) {
  return `/tenants/${tenantSlug}`;
};
