'use server'

// Server Actions in a separate file
// This file contains reusable server actions

interface UserDataResult {
  success: boolean
  data: {
    fullName: string
    age: string
    country: string
    bio: string
    processedAt: string
  }
}

export async function submitUserData(formData: FormData): Promise<UserDataResult> {
  // Extract form data
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const age = formData.get('age') as string
  const country = formData.get('country') as string
  const bio = formData.get('bio') as string
  
  // Print form data to server console
  console.log('=== FORM DATA RECEIVED (Demo B - External Action) ===')
  console.log('First Name:', firstName)
  console.log('Last Name:', lastName)
  console.log('Age:', age)
  console.log('Country:', country)
  console.log('Bio:', bio)
  console.log('Timestamp:', new Date().toISOString())
  console.log('======================================================')
  
  // Simulate some server-side processing
  const fullName = `${firstName} ${lastName}`
  const processedAt = new Date().toISOString()
  
  // Return processed data
  return {
    success: true,
    data: {
      fullName,
      age,
      country,
      bio,
      processedAt
    }
  }
}

export async function logActivity(action: string, details: Record<string, unknown>): Promise<void> {
  'use server'
  
  console.log(`[Activity Log] ${action}:`, details)
}
