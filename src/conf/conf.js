const conf = {
    serviceID: String(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID),
    templateID: String(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID),
    publicKey: String(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY),
    publicUrl: String(import.meta.env.PUBLIC_URL)
}
export default conf