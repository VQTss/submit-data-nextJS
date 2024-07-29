// src/app/api/submitForm/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { saveDataToGoogleSheets } from '../../../services/googleSheetsService';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Lưu dữ liệu vào Google Sheets
    await saveDataToGoogleSheets(data);

    return NextResponse.json({ message: 'Success' });
  } catch (err) {
    console.error('Error handling form submission:', err);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
