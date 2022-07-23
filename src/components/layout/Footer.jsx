import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
            Copyright {footerYear}
        </div>

    </footer>
  )
}

export default Footer