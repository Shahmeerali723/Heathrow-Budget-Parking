import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// POST request handler
export async function POST(req: Request) {
  const { pickupDate, pickupTime, dropOffDate, dropOffTime, airport, terminal, promoCode } = await req.json();

  try {
    // Google Sheets API setup
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS as string),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    // Append form data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet2!A:G', // Adjust this range according to your sheet structure
      valueInputOption: 'RAW',
      requestBody: {
        values: [[pickupDate, pickupTime, dropOffDate, dropOffTime, airport, terminal, promoCode]],
      },
    });

    // Fetch pricing from Google Sheet
    const pricing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!H:J', // Adjust this range to your pricing columns
    });

    const prices = pricing.data.values;

    return NextResponse.json({ status: 'success', prices });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ status: 'error', error: error.message });
  }
}
