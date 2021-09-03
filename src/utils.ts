const correctAnswerResponse = (response: string) => { 
  return {valid: true, response}
}

const badAnswerResponse = {valid: false, response: "Invalid Answer"}

export const getCorrectAnswer = (step: number, answer: string) => {
  switch (step) {
    case 6:
      return answer === "1852" ? correctAnswerResponse("0x7A") : badAnswerResponse;
    case 7:
      return answer === "7" ? correctAnswerResponse("0x2D") : badAnswerResponse;
    case 8:
      return answer === "oliver wood" ? correctAnswerResponse("0x22") : badAnswerResponse;
    case 9:
      return answer === "jordi sanchez" || answer === "jordi sánchez"  ? correctAnswerResponse("0xEC") : badAnswerResponse;
    case 10:
      return answer === "con calma" ? correctAnswerResponse("0x81") : badAnswerResponse;
    case 11:
      return answer === "timo werner" ? correctAnswerResponse("0x56") : badAnswerResponse;
    case 12:
      return answer === "tortugas" || answer === "tortuga"? correctAnswerResponse("0xFA") : badAnswerResponse;
    case 13:
      return answer === "espantatiburones" ? correctAnswerResponse("0xC0") : badAnswerResponse;
    case 14:
      return answer === "9000" || answer === "90 00"? correctAnswerResponse("3 4 1 5 8 6 2 7") : badAnswerResponse;
    default:
      return '';
  }
};


export function addMinutesToDate(date: Date, minutes: number): Date {
  return new Date(new Date(date).setMinutes(date.getMinutes() + minutes));
}
export const CORRECT_COMBINATION = '39033210';
export const LIMIT_MINUTES = 30;
export const LIMIT_MILISECONDS = LIMIT_MINUTES * 60000;
export function getCookie(name: string) : string | null{
  return localStorage.getItem(name);
}

export function setCookie(name: string, value: any) {
  return localStorage.setItem(name, value);
}
