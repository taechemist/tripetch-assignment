import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * Join classnames or tailwind classnames.
 *
 * @param   ClassValue
 * @returns string.
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cn;
