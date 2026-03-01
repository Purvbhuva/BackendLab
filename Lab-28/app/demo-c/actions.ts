'use server'

// Server Action with Form Validation

interface ValidationErrors {
  username?: string
  email?: string
  age?: string
  website?: string
  password?: string
  terms?: string
}

interface FormResult {
  success: boolean
  errors?: ValidationErrors
  data?: {
    username: string
    email: string
    age: number
    website: string | null
    timestamp: string
  }
}

export async function validateAndSubmitForm(formData: FormData): Promise<FormResult> {
  const errors: ValidationErrors = {}
  
  // Extract form data
  const username = formData.get('username') as string | null
  const email = formData.get('email') as string | null
  const age = formData.get('age') as string | null
  const website = formData.get('website') as string | null
  const password = formData.get('password') as string | null
  const terms = formData.get('terms') as string | null
  
  console.log('=== FORM VALIDATION STARTED (Demo C) ===')
  console.log('Received Data:', {
    username,
    email,
    age,
    website,
    password: password ? '*'.repeat(password.length) : null,
    terms
  })
  
  // Validate Username
  if (!username || username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters long'
    console.log('❌ Validation Error: Username too short')
  } else {
    console.log('✓ Username valid')
  }
  
  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address'
    console.log('❌ Validation Error: Invalid email format')
  } else {
    console.log('✓ Email valid')
  }
  
  // Validate Age
  const ageNum = parseInt(age || '')
  if (!age || isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
    errors.age = 'Age must be between 18 and 100'
    console.log('❌ Validation Error: Age out of range')
  } else {
    console.log('✓ Age valid')
  }
  
  // Validate Website (optional, but must be valid if provided)
  if (website && website.trim() !== '') {
    try {
      new URL(website)
      console.log('✓ Website valid')
    } catch {
      errors.website = 'Please enter a valid URL (e.g., https://example.com)'
      console.log('❌ Validation Error: Invalid website URL')
    }
  } else {
    console.log('✓ Website not provided (optional)')
  }
  
  // Validate Password
  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters long'
    console.log('❌ Validation Error: Password too short')
  } else {
    console.log('✓ Password valid')
  }
  
  // Validate Terms
  if (!terms) {
    errors.terms = 'You must agree to the terms and conditions'
    console.log('❌ Validation Error: Terms not accepted')
  } else {
    console.log('✓ Terms accepted')
  }
  
  // Check if there are any errors
  if (Object.keys(errors).length > 0) {
    console.log('❌ VALIDATION FAILED - Total errors:', Object.keys(errors).length)
    console.log('========================================')
    return {
      success: false,
      errors
    }
  }
  
  // If validation passes, process the data
  console.log('✅ VALIDATION PASSED')
  console.log('Processing form submission...')
  
  // Simulate some server-side processing
  const timestamp = new Date().toISOString()
  
  console.log('Form data successfully processed at:', timestamp)
  console.log('========================================')
  
  // Return success with sanitized data
  return {
    success: true,
    data: {
      username: username!.trim(),
      email: email!.trim(),
      age: ageNum,
      website: website && website.trim() !== '' ? website.trim() : null,
      timestamp
    }
  }
}
