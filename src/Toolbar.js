import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { toolbarPlugin, ToolbarSlot, MoreActionsPopover,  } from '@react-pdf-viewer/toolbar';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { SelectionMode, selectionModePlugin } from '@react-pdf-viewer/selection-mode';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/selection-mode/lib/styles/index.css';



const ToolbarApp = () => {
    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover, } = zoomPluginInstance;

    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageInput, GoToFirstPageButton, GoToLastPageButton, GoToNextPageButton, GoToPreviousPage, NumberOfPages, } =
        pageNavigationPluginInstance;

    const selectionModePluginInstance = selectionModePlugin();
    const { SwitchSelectionModeButton } = selectionModePluginInstance;

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
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
                        alignItems: 'center',
                        backgroundColor: '#eeeeee',
                        border: '1px solid rgba(0, 0, 0, 0.2)',
                        borderRadius: '2px',
                        // bottom: '16px',
                        display: 'flex',
                        left: '50%',
                        padding: '4px',
                        //    position: 'absolute',
                        position: 'Fixed',
                        transform: 'translate(-50%, 0)',
                        zIndex: 1,
                     
                      backgroundColor:'white'
                    }}
                >
                    {/* <div style={{ padding: '0px 2px' }}>
                <GoToFirstPageButton />
            </div> */}
                    <div style={{ padding: '0px 10px', color:'black' }}>
                        <GoToPreviousPage />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <GoToNextPageButton />
                    </div>
                    <div style={{ padding: '0px 10px', width: '4rem' }}>
                        <CurrentPageInput />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        / <NumberOfPages />
                    </div>
                   
                    <div style={{ padding: '0px 10px' }}>
                        <ZoomOutButton />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <ZoomInButton />
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <ZoomPopover />
                    </div>
                    <div style={{ padding: '0px 10px',accentColor:'black' }}>
                    <SwitchSelectionModeButton mode={SelectionMode.Hand} />
                </div>
                {/* <div style={{ padding: '0px 2px', color:'black' ,}}>
                    <SwitchSelectionModeButton mode={SelectionMode.Text} />
                </div> */}
                    {/* <div style={{ padding: '0px 2px' }}>
                <GoToLastPageButton />
            </div> */}


{/* <Toolbar /> */}
                    {/* <Toolbar>
                        {(props) => {
                            const {
                                CurrentPageInput,
                                Download,
                                EnterFullScreen,
                                GoToNextPage,
                                GoToPreviousPage,
                                NumberOfPages,
                                Print,
                                ZoomIn,
                                ZoomOut,
                                ZoomOutButton,
                                ZoomPopover,
                                ZoomInButton,



                            } = props;
                            return (
                                <>
                                    <div style={{ padding: '0px 2px' }}>
                                    <ZoomOut />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomIn />
                                </div>

                                    <div style={{ padding: '0px 2px' }}>
                    <ZoomOutButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <ZoomPopover />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <ZoomInButton />
                </div>
                                    <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <GoToPreviousPage />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <GoToNextPage />
                                </div>
                                <div style={{ padding: '0px 2px', width: '4rem' }}>
                                    <CurrentPageInput />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    / <NumberOfPages />
                                </div>

                                    <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <EnterFullScreen />
                                </div>
                                    <div style={{ padding: '0px 2px' }}>
                                    <Download />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <Print />
                                </div>
                                </>
                            );
                        }}
                    </Toolbar> */}

                </div>
                <div
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Viewer fileUrl={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`} plugins={[zoomPluginInstance, pageNavigationPluginInstance,selectionModePluginInstance]} />
                    {/* <Viewer fileUrl={`${process.env.PUBLIC_URL}/Neudesic.pdf`} plugins={[toolbarPluginInstance,zoomPluginInstance]} />  */}
                </div>
            </div>
        </Worker>
    );
};

export default ToolbarApp;