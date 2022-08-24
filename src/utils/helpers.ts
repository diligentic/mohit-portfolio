export function formatReadingTime(minutes: string) {
  const cups = Math.round(+minutes / 5);
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`;
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
  }
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date: string, lang: string) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  const newDate: Date = new Date(date);
  const language = lang || 'en';
  return newDate.toLocaleDateString(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
