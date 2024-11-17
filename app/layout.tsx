import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/icon.ico",
    shortcut: "/Guruu-Orange-Cropped.svg",
    apple: "/Guruu-Orange-Cropped.svg",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            " bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SiteHeader />
            <div className="relative overflow-x-hidden py-5 sm:py-20 md:py-0 lg:py-0">
              <div className="flex-1">{children}</div>

              <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                  "z-0"
                )}
              />
            </div>

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
