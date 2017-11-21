const { date, now, find, switcher } = D;
const caption = find('#caption');
const timeDiv = find('#time');
const numbers = [
  'ZERO',
  'ONE',
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
  'TEN'
];
const captionSwitcher = switcher('call', '')
  .case((x) => x <= 10, (x) => numbers[x])
  .case((x) => x <= 60, 'Getting very very close...')
  .case((x) => x <= 300, 'Getting very close...')
  .case((x) => x <= 1800, 'Getting so close...')
  .case((x) => x <= 86400, 'Getting close...');

D(100).interval(() => {
  const diff = date(date(`1-1-${new Date().getFullYear() + 1}`).time() - now()).time();
  const secs = D(diff / 1000).floor;
  const minsAndSecs = secs%3600;
  let hours = D(secs / 3600).floor;

  if (hours < 10) {
    hours = '0' + hours;
  }

  timeDiv.html('');

  if (diff < 0) {
    caption.text('Hurray!!!');

    return;
  }

  caption.text(captionSwitcher(secs));
  timeDiv.text(
    `${ hours }:${ date(minsAndSecs * 1000).format('mm:ss') }`
  );
});
