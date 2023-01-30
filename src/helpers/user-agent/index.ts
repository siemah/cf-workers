import parser from "ua-parser-js";

/**
 * Extract some details about user agent
 * @param userAgent user agent header
 * @returns user details such as browser, os and device
 */
export function parseUserAgent(userAgent: string): parser.IResult {
  const uaDetails = parser(userAgent);

  return uaDetails;
}