const calendarId = 'pichealthtest@gmail.com';
const API_KEY = 'AIzaSyAQzdOl2c0zmiep0xfxiYg9BhvhOcPncM4';

/**
 * Fetch events from the Google Calendar API
 */
export async function fetchCalendarEvents() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${API_KEY}`
    );
    const data = await response.json();

    if (data.items) {
      return data.items;
    } else {
      console.error("No events found in calendar:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return [];
  }
}
