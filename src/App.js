// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// function MyApp() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }


// import * as React from 'react';
// import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

// export class App extends React.Component {

 

// render() {
//     return (<div>
//         <div className='control-section'>
//             <PdfViewerComponent id="container" documentPath={`${process.env.PUBLIC_URL}/pdf.pdf`} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
//                 <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]}/>
//             </PdfViewerComponent>

//             {/* <PdfViewerComponent id="container" documentPath="PDF_File1.pdf" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
//                 <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]}/>
//             </PdfViewerComponent>  */}

//             {/* <PdfViewerComponent id="container" documentLoad="https://drive.google.com/file/d/12iHpHlW2YGxTrcT8Mxl_0g-Ejf89Nxs_/view?usp=sharing.pdf"  serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
//             <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]}/>
//             </PdfViewerComponent> */}
//         </div>
//     </div>);
// }
// }

// export default App;


import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const App = () => {
    // const toolbarPluginInstance = toolbarPlugin();
    // const {renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;
    // const transform = (slot) => ({
    //     ...slot,
    //     Download: () => <></>,
    //     DownloadMenuItem: () => <></>,
    //     EnterFullScreen: () => <></>,
    //     EnterFullScreenMenuItem: () => <></>,
    //     SwitchTheme: () => <></>,
    //     SwitchThemeMenuItem: () => <></>,
    //    // Print:() => <></>,
    //     Open:() => <></>,
    //     //Moreactions:() => <></>,
    //    // Menu:() => <></>,
    //    // OpenMenuItem:() => <></>,
    //   //  ShowProperties:() =><></>,
    //     MoreIcon:() =><></>
    // });

    // const transform = TransformToolbarSlot({ 
    //     slot: ToolbarSlot=> ({
    //         ...slot,
    //         Download: () => <></>,
    //         DownloadMenuItem: () => <></>,
    //         EnterFullScreen: () => <></>,
    //         EnterFullScreenMenuItem: () => <></>,
    //         SwitchTheme: () => <></>,
    //         SwitchThemeMenuItem: () => <></>,
    //     }),
        
    // });

    // const defaultLayoutPluginInstance = defaultLayoutPlugin({
    //     sidebarTabs: (defaultTabs) => [],
    //     Download:(defaultTabs)=>[]
    //     // Download: () => <></>
    // });

 

    return (

        
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">

            {/* <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            > */}
       
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                height: '100%',
                position: 'relative',
            }}
        >
             <div
                style={{
                    alignItems: 'top',
                    backgroundColor: '#eeeeee',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    borderRadius: '2px',
                  //  bottom: '16px',
                    display: 'flex',
                    left: '50%',
                    padding: '4px',
                   // position: 'absolute',
                   position: 'Fixed',
                    transform: 'translate(-50%, 0)',
                    zIndex: 1,
                }}
            >
                <Toolbar>
                    {(props) => {
                        const {
                            CurrentPageInput,
                          //  Download,
                            EnterFullScreen,
                            GoToNextPage,
                            GoToPreviousPage,
                            NumberOfPages,
                         //   Print,
                            ZoomIn,
                            ZoomOut,
                        } = props;
                        return (
                            <>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomOut />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomIn />
                                </div>
                                <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <GoToPreviousPage />
                                </div>
                                <div style={{ padding: '0px 2px', width: '4rem' }}>
                                    <CurrentPageInput />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    / <NumberOfPages />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <GoToNextPage />
                                </div>
                                <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <EnterFullScreen />
                                </div>
                                {/* <div style={{ padding: '0px 2px' }}>
                                    <Download />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <Print />
                                </div> */}
                            </>
                        );
                    }}
                </Toolbar>
                </div>
         <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer
                    fileUrl={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`}
                    // fileUrl={`${process.env.PUBLIC_URL}/pdf.pdf`}

                    plugins={[toolbarPluginInstance]}
                />
            </div>
            </div>

{/* return (
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '0.25rem',
                }}
            >
                <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
            </div>
            {/* <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            > 
                <Viewer fileUrl={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`} plugins={[toolbarPluginInstance]} />
            </div>
        </div>
    ); */}

        </Worker>
    
     
    );
};

export default App;