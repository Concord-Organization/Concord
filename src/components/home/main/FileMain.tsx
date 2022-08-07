import { Viewer, Worker } from '@react-pdf-viewer/core'
import { Box } from '@chakra-ui/react'

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { memo } from 'react'

function FileMain() {
  console.log('asdasd')
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
      <Box height="calc(100% - 45px)" mx="auto" w="1000px" overflow="hidden">
        <Viewer
          defaultScale={1}
          fileUrl="http://192.168.219.101:8080/test1.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </Box>
    </Worker>
  )
}

export default memo(FileMain)
