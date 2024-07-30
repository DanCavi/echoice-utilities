import { Box } from "@mui/material"
import { useState } from "react"
import JSONPretty from "react-json-pretty"
import 'react-json-pretty/themes/monikai.css'


const JsonField = ({ 
  data = {
    key: "Value",
    key2: "Value2",
    embebbedKey: { key: "Value", key2: "Value2" }
  },
  setData,
}) => {
  const [json, setJson] = useState(data)



  return (
    <Box
    
    >
      <JSONPretty
        data={json}
        mainStyle={"padding: 1rem; letter-spacing: 1px; border-radius: 4px;"}
      />

    </Box>
  )
}
export default JsonField