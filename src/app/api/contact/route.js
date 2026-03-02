import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // In a real production app, this would send an email (e.g., via Resend, SendGrid) 
    // or push to a database/GCP as mentioned in the roadmap.
    // For now, we simulate the processing of a high-intent inquiry.
    
    console.log('--- NEW PROJECT INQUIRY RECEIVED ---');
    console.log(`From: ${data.name} (${data.email})`);
    console.log(`Company: ${data.company || 'N/A'}`);
    console.log(`Core Interest: ${data.service}`);
    console.log(`Timeline: ${data.budget}`); // 'budget' field is used for Timeline in the form
    console.log(`Brief: ${data.brief}`);
    console.log('-----------------------------------');

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ 
      success: true, 
      message: 'Project inquiry received.' 
    }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process inquiry.' 
    }, { status: 400 });
  }
}
