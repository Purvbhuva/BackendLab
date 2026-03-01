import Link from 'next/link'

// Server Action defined inline in the same file
async function handleFormSubmit(formData: FormData) {
  'use server'
  
  // Extract form data
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  
  // Print form data to server console
  console.log('=== FORM DATA RECEIVED (Demo A) ===')
  console.log('Name:', name)
  console.log('Email:', email)
  console.log('Message:', message)
  console.log('Timestamp:', new Date().toISOString())
  console.log('===================================')
}

export default function DemoA() {
  return (
    <div>
      <Link 
        href="/"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#0070f3',
          textDecoration: 'none',
          fontSize: '14px'
        }}
      >
        ← Back to Home
      </Link>

      <div style={{
        backgroundColor: 'white',
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        padding: '30px',
        maxWidth: '600px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <span style={{
            backgroundColor: '#0070f3',
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            A
          </span>
          <div>
            <h2 style={{ margin: 0 }}>Demo A: Inline Server Action</h2>
            <p style={{ margin: '5px 0 0', color: '#666', fontSize: '14px' }}>
              Server action prints form data to console
            </p>
          </div>
        </div>

        <form action={handleFormSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="name"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="message"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows={4}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#0070f3',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Submit Form
          </button>
        </form>

        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#f0f9ff',
          borderLeft: '4px solid #0070f3',
          borderRadius: '4px'
        }}>
          <h4 style={{ marginTop: 0, color: '#0369a1' }}>ℹ️ How it works:</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#075985', lineHeight: '1.6' }}>
            <li>Server action is defined inline using <code>&apos;use server&apos;</code> directive</li>
            <li>Form data is automatically passed to the server action</li>
            <li>Action prints data to the server console (check your terminal)</li>
            <li>Data processing happens entirely on the server</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
