'use client'

import { ThemeProvider } from "next-themes"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from "react-hot-toast"

function MyApp({ children }) {
  return (
    <ThemeProvider attribute="class">
      <NextSSRPlugin
        /**
         * The `extractRouterConfig` will extract **only** the route configs
         * from the router to prevent additional information from being
         * leaked to the client. The data passed to the client is the same
         * as if you were to fetch `/api/uploadthing` directly.
         */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  )
}

export default MyApp