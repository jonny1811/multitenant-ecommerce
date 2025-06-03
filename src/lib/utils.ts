import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string, resolving Tailwind CSS class conflicts.
 *
 * Accepts any number of class values, conditionally joins them, and merges conflicting Tailwind CSS classes for use in className attributes.
 *
 * @param inputs - Class values to be combined and merged.
 * @returns A merged class string with conflicts resolved for Tailwind CSS.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

/**
 * Constructs a tenant-specific URL path using the provided tenant slug.
 *
 * @param tenantSlug - The unique identifier for the tenant.
 * @returns The URL path for the tenant in the format `/tenants/{tenantSlug}`.
 */
export function generateTenantURL(tenantSlug: string) {
  return `/tenants/${tenantSlug}`;
};
