import { Box } from "@mui/material"
import JSONPretty from "react-json-pretty"
import 'react-json-pretty/themes/monikai.css'


const JsonField = ({ 
  json = {
    key: "Value",
    key2: "Value2"
  }
}) => {
  return (
    <Box
    >
      <JSONPretty data={json} style={{ padding: '20px'}} />

    </Box>
  )
}
export default JsonField