import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Lab 28 - Server Actions Demo',
  description: 'NextJS Server Actions Implementation',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <header style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h1 style={{ margin: 0 }}>Lab 28: NextJS Server Actions</h1>
            <p style={{ margin: '10px 0 0', opacity: 0.9 }}>
              Demonstrating Server-Side Form Handling
            </p>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
