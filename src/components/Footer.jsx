import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="bg-[#354D04] w-70% py-4  bottom-0 left-0 text-sm  flex items-cnter px-2">
        <p className=" ml-4 pl-10">© 2025 Faith. All rights reserved.</p>
        <div className="p-2 flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="hover:text-gray-300 text-white w-6 h-10">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer
