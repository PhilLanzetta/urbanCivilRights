import React, { useEffect } from "react"

const EmbedForm = () => {
  useEffect(() => {
    // Dynamically create and append the script tag
    const script = document.createElement("script")
    script.src =
      "https://default.salsalabs.org/api/widget/template/fd3f57a3-c63b-4d0b-8972-0a35c4f4e3b4/?tId=NdvhiAEwCk" // Replace with actual widget script source
    script.async = true
    document.body.appendChild(script)

    // Clean up the script when the component unmounts (optional, but good practice)
    return () => {
      document.body.removeChild(script)
    }
  }, []) // Empty dependency array ensures this runs only once on mount

  return <div id="NdvhiAEwCk">{/* HTML part of the widget embed code */}</div>
}

export default EmbedForm
