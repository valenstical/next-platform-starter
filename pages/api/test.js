
import requestIp from 'request-ip'

export default function handler(
  req,
  res
) {
  const detectedIp = requestIp.getClientIp(req)
  res.status(200).json({ message: 'Hello from Next.js!', detectedIp })
}