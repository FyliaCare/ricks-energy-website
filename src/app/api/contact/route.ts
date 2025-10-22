import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send email notification
    
    console.log('Contact form submission:', data);
    
    // For now, just return a success response
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return contact form submissions for admin dashboard
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  );
}