import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 gap-4 items-center">
      
      <li>
          <AnchorLink
                  href={"#about"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      About
          </AnchorLink>
      </li>
      <li>
          <AnchorLink
                  href={"#skill"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      Skill
          </AnchorLink>
      </li>
      <li>
          <AnchorLink
                  href={"#project"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      Project
          </AnchorLink>
      </li>
      <li>
          <AnchorLink
                  href={"#contact"}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                      Contact
          </AnchorLink>
      </li>

    </ul>
  )
}

export default MenuOverlay