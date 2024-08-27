import React from 'react'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    }}>
        <Link href="https://wa.me/919175054994" passHref target='blank' style={{ color: 'white', textDecoration: 'none' }}>
            <FaWhatsapp size={30} />
        </Link>
    </div>
  )
}

export default WhatsApp