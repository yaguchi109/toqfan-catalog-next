/** @type {import('next').NextConfig} */
const timeZoneHour =
  1000 * 60 * 60 * Number(process.env.NEXT_PUBLIC_TIMEZONE_HOUR);
const timeZoneMinute =
  1000 * 60 * Number(process.env.NEXT_PUBLIC_TIMEZONE_MINUTE);
const getDate = () => {
  const now = new Date();
  now.setTime(now.getTime() + timeZoneHour + timeZoneMinute);
  return now.toISOString().substr(0, 10);
};

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  distDir: '.next',
  env: {
    NEXT_PUBLIC_EXPORT_DATE: getDate(),
  },
};
