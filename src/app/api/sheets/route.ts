// app/api/sheets/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = 'AIzaSyDsvDwOgA6lLTMTgbnjG-KPzS5zZn6Iomw';
  const spreadsheetId = '1-HiuVw5OGBJgg-dHyr76tmuZ5cpzXHFA0PKqzxuSnIA';
  const range = 'Sheet1!A1:G31'; // Adjust the range as needed

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.values || data.values.length === 0) {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    return NextResponse.json({ data: data.values });
  } catch (error) {
    return NextResponse.json({ error: 'Error retrieving data' }, { status: 500 });
  }
}
