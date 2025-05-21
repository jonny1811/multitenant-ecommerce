import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  }
};

export default withPayload(nextConfig);
