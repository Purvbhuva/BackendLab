import Link from 'next/link'

interface Demo {
  title: string
  description: string
  href: string
  badge: string
}

export default function Home() {
  const demos: Demo[] = [
    {
      title: 'Demo A: Inline Server Action',
      description: 'Server action defined in the same file that prints form data',
      href: '/demo-a',
      badge: 'A'
    },
    {
      title: 'Demo B: External Server Action',
      description: 'Server action defined in a separate file and imported',
      href: '/demo-b',
      badge: 'B'
    },
    {
      title: 'Demo C: Server Action with Validation',
      description: 'Server action with form data validation and error handling',
      href: '/demo-c',
      badge: 'C'
    }
  ]

  return (
    <div>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2 style={{ marginTop: 0 }}>Welcome to Server Actions Lab</h2>
        <p style={{ marginBottom: 0 }}>
          This application demonstrates three different implementations of Next.js Server Actions.
          Click on any demo below to see it in action.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      }}>
        {demos.map((demo) => (
          <Link
            key={demo.href}
            href={demo.href}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              padding: '20px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              backgroundColor: 'white',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px'
              }}>
                <span style={{
                  backgroundColor: '#0070f3',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  {demo.badge}
                </span>
                <h3 style={{ margin: 0, fontSize: '18px' }}>{demo.title}</h3>
              </div>
              <p style={{
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>
                {demo.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#fffbeb',
        borderLeft: '4px solid #f59e0b',
        borderRadius: '4px'
      }}>
        <h3 style={{ marginTop: 0, color: '#92400e' }}>
          💡 About Server Actions
        </h3>
        <p style={{ color: '#78350f', margin: 0, lineHeight: '1.6' }}>
          Server Actions are asynchronous functions that run on the server in Next.js applications.
          They enable you to securely mutate data, handle form submissions, and perform server-side
          operations without creating separate API routes.
        </p>
      </div>
    </div>
  )
}
