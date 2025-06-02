import type { CollectionConfig } from "payload";
import { tenantsArrayField } from "@payloadcms/plugin-multi-tenant/fields";

const defaultArrayField = tenantsArrayField({
	tenantsArrayFieldName: "tenants",
	tenantsCollectionSlug: "tenants",
	tenantsArrayTenantFieldName: "tenant",
	arrayFieldAccess: {
		read: () => true,
		create: () => true,
		update: () => true,
	},
	tenantFieldAccess: {
		read: () => true,
		create: () => true,
		update: () => true,
	},
});

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	auth: true,
	fields: [
		{
			name: "username",
			required: true,
			unique: true,
			type: "text",
		},
		{
			admin: {
				position: "sidebar",
			},
			name: "roles",
			type: "select",
			defaultValue: ["user"],
			hasMany: true,
			options: ["super-admin", "user"],
		},
		{
			...defaultArrayField,
			admin: {
				...(defaultArrayField?.admin || {}),
				position: "sidebar",
			}
		},
	],
};
