'use client'

import Link from 'next/link'
import { useState, FormEvent } from 'react'
import { validateAndSubmitForm } from './actions'

interface ValidationErrors {
  username?: string
  email?: string
  age?: string
  website?: string
  password?: string
  terms?: string
}

interface SubmittedData {
  username: string
  email: string
  age: number
  website: string | null
  timestamp: string
}

export default function DemoC() {
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [success, setSuccess] = useState(false)
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null)

  async function handleSubmit(formData: FormData) {
    // Reset states
    setErrors({})
    setSuccess(false)
    setSubmittedData(null)

    // Call server action
    const result = await validateAndSubmitForm(formData)

    if (result.success && result.data) {
      setSuccess(true)
      setSubmittedData(result.data)
      // Reset form
      const form = document.getElementById('validationForm') as HTMLFormElement
      form?.reset()
    } else {
      setErrors(result.errors || {})
    }
  }

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
            backgroundColor: '#8b5cf6',
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            C
          </span>
          <div>
            <h2 style={{ margin: 0 }}>Demo C: Server Action with Validation</h2>
            <p style={{ margin: '5px 0 0', color: '#666', fontSize: '14px' }}>
              Form validation happens on the server
            </p>
          </div>
        </div>

        {success && submittedData && (
          <div style={{
            padding: '15px',
            backgroundColor: '#d1fae5',
            border: '1px solid #10b981',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            <h4 style={{ marginTop: 0, color: '#065f46' }}>✓ Form Submitted Successfully!</h4>
            <div style={{ color: '#047857', fontSize: '14px' }}>
              <p style={{ margin: '5px 0' }}><strong>Username:</strong> {submittedData.username}</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> {submittedData.email}</p>
              <p style={{ margin: '5px 0' }}><strong>Age:</strong> {submittedData.age}</p>
              <p style={{ margin: '5px 0' }}><strong>Website:</strong> {submittedData.website || 'N/A'}</p>
              <p style={{ margin: '5px 0' }}><strong>Submitted at:</strong> {new Date(submittedData.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}

        <form id="validationForm" action={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="username"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              Username: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Minimum 3 characters"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.username ? '#ef4444' : '#ddd'}`,
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
            {errors.username && (
              <p style={{ color: '#ef4444', fontSize: '13px', margin: '5px 0 0' }}>
                {errors.username}
              </p>
            )}
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
              Email: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Valid email address"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.email ? '#ef4444' : '#ddd'}`,
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && (
              <p style={{ color: '#ef4444', fontSize: '13px', margin: '5px 0 0' }}>
                {errors.email}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="age"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              Age: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Between 18 and 100"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.age ? '#ef4444' : '#ddd'}`,
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
            {errors.age && (
              <p style={{ color: '#ef4444', fontSize: '13px', margin: '5px 0 0' }}>
                {errors.age}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="website"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              Website: (optional)
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="https://example.com"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.website ? '#ef4444' : '#ddd'}`,
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
            {errors.website && (
              <p style={{ color: '#ef4444', fontSize: '13px', margin: '5px 0 0' }}>
                {errors.website}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="password"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}
            >
              Password: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Minimum 8 characters"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.password ? '#ef4444' : '#ddd'}`,
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
            {errors.password && (
              <p style={{ color: '#ef4444', fontSize: '13px', margin: '5px 0 0' }}>
                {errors.password}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="terms"
                style={{ marginRight: '8px', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '14px' }}>
                I agree to the terms and conditions <span style={{ color: 'red' }}>*</span>
              </span>
            </label>
            {errors.terms && (
              <p style={{ color: '#ef4444', fontSize: '13px', margin: '5px 0 0' }}>
                {errors.terms}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#8b5cf6',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              width: '100%'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8b5cf6'}
          >
            Validate and Submit
          </button>
        </form>

        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#faf5ff',
          borderLeft: '4px solid #8b5cf6',
          borderRadius: '4px'
        }}>
          <h4 style={{ marginTop: 0, color: '#6b21a8' }}>ℹ️ Validation Rules:</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#7e22ce', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Username: Required, minimum 3 characters</li>
            <li>Email: Required, valid email format</li>
            <li>Age: Required, between 18 and 100</li>
            <li>Website: Optional, valid URL if provided</li>
            <li>Password: Required, minimum 8 characters</li>
            <li>Terms: Must be accepted</li>
          </ul>
          <p style={{ margin: '10px 0 0', fontSize: '13px', color: '#9333ea' }}>
            All validation is performed on the server. Check server console for validation logs.
          </p>
        </div>
      </div>
    </div>
  )
}
