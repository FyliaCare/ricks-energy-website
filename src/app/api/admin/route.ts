import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Return admin dashboard data
  const dashboardData = {
    stats: {
      totalProjects: 250,
      activeProjects: 15,
      totalClients: 180,
      energyGenerated: 152.5, // MW
    },
    recentContacts: [
      {
        id: 1,
        name: 'John Smith',
        email: 'john@example.com',
        service: 'Solar Energy Solutions',
        date: new Date().toISOString(),
        status: 'new'
      },
      // Add more sample data
    ],
    projectUpdates: [
      {
        id: 1,
        projectName: 'Manchester Solar Farm',
        status: 'In Progress',
        completion: 65,
        nextMilestone: 'Grid Connection',
        date: new Date().toISOString(),
      },
      // Add more sample data
    ]
  };

  return NextResponse.json(dashboardData);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Handle admin actions like updating project status, etc.
    console.log('Admin action:', data);
    
    return NextResponse.json(
      { message: 'Action completed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing admin action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    );
  }
}