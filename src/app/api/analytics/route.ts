import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log web vitals for monitoring
    console.log('Web Vitals:', {
      name: body.name,
      value: body.value,
      rating: body.rating,
      id: body.id,
    });

    // Here you could send to analytics service like:
    // - Google Analytics
    // - Vercel Analytics
    // - Custom analytics endpoint
    // Example:
    // await fetch('https://your-analytics-endpoint.com', {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
