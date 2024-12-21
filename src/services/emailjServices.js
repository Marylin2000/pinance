// emailService.js
import emailjs from 'emailjs-com';

const sendEmail = async (templateParams) => {
  try {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID; // This is your public key

    const result = await emailjs.send(serviceID, templateID, templateParams, userID);
    console.log('Email sent successfully:', result.text);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
