import colors, { Color } from 'colors';
import { types } from './types.json';

const log = (message: string = "", type: string = "error") => {

  const colorFormat: { [key: string]: [string, keyof Color] } = {
    error: ["[ Error ]".bgRed, "red"],
    success: ["[ Success ]".bgGreen, "green"],
    api: ["[ API ]".bgCyan, "cyan"],
    client: ["[ Client ]".bgBlue, "blue"],
  }

  if (!types.includes(type)) {
    type = "error";
  }

  const [typeString, color] = colorFormat[type]
  console.log(`${typeString} ${colors[color](message.replace(" ", " "))}`)
}

export default log;