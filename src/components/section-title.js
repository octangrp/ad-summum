import React from "react"

const SectionTitle = ({ children }) => (
  <div class="inline-block mb-6">
    <h1 className="text-2xl font-primary font-bold uppercase tracking-wider">
      {children}
    </h1>
    <div className=" w-100 h-rem-1 rounded-full bg-grey-light"></div>
  </div>
)

export default SectionTitle
