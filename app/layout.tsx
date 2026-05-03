import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creator 1099 Tracker — Auto-track income from YouTube, Twitch, Patreon',
  description: 'Automatically pull income data from creator platforms, categorize earnings, track business expenses, and generate 1099 summaries with quarterly tax estimates.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="991dd2c3-2366-4303-b06f-9cf7caa7cf98"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
