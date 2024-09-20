'use client'

import { ThemeProvider } from "next-themes"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import { SessionProvider } from 'next-auth/react'

function MyApp({ children }) {
  return (
    <ThemeProvider attribute="class">
      <NextSSRPlugin
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <Toaster position="top-center" reverseOrder={false} />
      <SessionProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp