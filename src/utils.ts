const correctAnswerResponse = (response: string) => { 
  return {valid: true, response}
}

const badAnswerResponse = {valid: false, response: "Invalid Answer"}

export const getCorrectAnswer = (step: number, answer: string) => {
  switch (step) {
    case 6:
      return answer === "1852" ? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 7:
      return answer === "7" ? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 8:
      return answer === "oliver wood" ? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 9:
      return answer === "jordi sanchez" || answer === "jordi sánchez"  ? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 10:
      return answer === "con calma" ? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 11:
      return answer === "timo werner" ? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 12:
      return answer === "tortugas" || answer === "tortuga"? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 13:
      return answer === "espantatiburones" ? correctAnswerResponse("0x0056") : badAnswerResponse;
    case 14:
      return answer === "9000" || answer === "90 00"? correctAnswerResponse("3 4 1 5 8 6 2 7") : badAnswerResponse;
    default:
      return '';
  }
};


export function addHoursToDate(date: Date, hours: number): Date {
  return new Date(new Date(date).setHours(date.getHours() + hours));
}
export const CORRECT_COMBINATION = '12345678';
export const LIMIT_HOURS = 0.5;
export const LIMIT_MILISECONDS = LIMIT_HOURS * 3600000;
export function getCookie(name: string) : string | null{
  return localStorage.getItem(name);
}

export function setCookie(name: string, value: any) {
  return localStorage.setItem(name, value);
}
