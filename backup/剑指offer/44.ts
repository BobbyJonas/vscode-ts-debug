function ReverseSentence(ReverseSentence: string): string {
  if (!ReverseSentence) return '';
  return ReverseSentence.split(' ').reverse().join(' ');
}
