import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generates an ICS (iCalendar) file content for Office Hours
 * and triggers a download
 */
export function downloadCalendarEvent() {
  const title = "Ritual DevRel Office Hours"
  const description = "Join Ritual's Lead DevRel Engineer, Val Alexander, to ask questions, explore new features, and get assistance with summoning your ideas from prototype to production.\n\nJoin here: https://discord.com/events/1210468736205852672/1425703047253856287"
  const location = "https://discord.com/events/1210468736205852672/1425703047253856287"
  const discordUrl = "https://discord.com/events/1210468736205852672/1425703047253856287"
  
  // Start date: Thursday, Nov 6, 2025, 5:00 PM UTC
  const startDate = new Date("2025-11-06T17:00:00Z")
  // End date: Thursday, Nov 6, 2025, 6:00 PM UTC
  const endDate = new Date("2025-11-06T18:00:00Z")
  
  // Format dates in ICS format (YYYYMMDDTHHmmssZ)
  const formatICSDate = (date: Date): string => {
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const day = String(date.getUTCDate()).padStart(2, '0')
    const hours = String(date.getUTCHours()).padStart(2, '0')
    const minutes = String(date.getUTCMinutes()).padStart(2, '0')
    const seconds = String(date.getUTCSeconds()).padStart(2, '0')
    return `${year}${month}${day}T${hours}${minutes}${seconds}Z`
  }
  
  const startICS = formatICSDate(startDate)
  const endICS = formatICSDate(endDate)
  const now = formatICSDate(new Date())
  
  // Escape special characters for ICS format
  const escapeICS = (text: string): string => {
    return text.replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n')
  }
  
  // Generate ICS content
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ritual Chain//Office Hours//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:ritual-office-hours-${startICS}@ritual.tools`,
    `DTSTAMP:${now}`,
    `DTSTART:${startICS}`,
    `DTEND:${endICS}`,
    `RRULE:FREQ=WEEKLY;BYDAY=TH`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    `LOCATION:${escapeICS(location)}`,
    `URL:${discordUrl}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeICS(title)} starting in 15 minutes`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  
  // Create blob and download
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'ritual-office-hours.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
