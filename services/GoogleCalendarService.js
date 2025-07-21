const PROXY_URL = 'https://1ccd6015-pic-proxy-worker.ntpotraz.workers.dev/';

export async function fetchCalendarEvents(calendarIds) {
  try {
    const allEvents = [];

    for (const calendarId of calendarIds) {
      const url = `${PROXY_URL}?calendarId=${encodeURIComponent(calendarId)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        allEvents.push(...data.items);
      } else {
        console.error('No events found in calendar:', data);
      }
    }

    return allEvents;
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
}

