import { HiOutlineMail } from 'react-icons/hi';

import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const data = [
    { id: 1, icon: <HiOutlineMail />, link: 'mailto:sonih3654@gmail.com' }, // Normal email link

    { id: 3, icon: <FaWhatsapp />, link: 'https://wa.me/+916388449807' }, // WhatsApp link

    { id: 5, icon: <FaPhoneAlt />, link: 'tel:+916388449807' } // Phone number
];



// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546


export default data