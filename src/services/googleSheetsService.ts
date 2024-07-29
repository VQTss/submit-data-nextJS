// src/services/googleSheetsService.ts
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

// Load biến môi trường từ .env
dotenv.config();

const sheets = google.sheets('v4');

export const saveDataToGoogleSheets = async (data: any) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_SHEETS_CREDENTIALS_PATH, // Đường dẫn tới file JSON của tài khoản dịch vụ
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const authClient = await auth.getClient() as JWT;

    const spreadsheetId = process.env.SPREADSHEET_ID; // ID của bảng tính
    const range = 'Sheet1!A1'; // Chỉ định hàng đầu tiên bắt đầu từ cột A

    // Ghi dữ liệu vào Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[data.name, data.email, data.phone, data.company]],
      },
      auth: authClient,
    });

    console.log('Data appended successfully:', response.data);
  } catch (err) {
    console.error('Error writing to Google Sheets:', err);
    if ((err as any).response && (err as any).response.data) {
      console.error('Error details:', (err as any).response.data);
    }
  }
};
