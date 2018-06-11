import React from 'react';
import {Cameras, Scanner} from "react-instascan";

export default () =>
    <Cameras>
        {cameras => (
            <div>
                <h1>Scan the code!</h1>
                <Scanner camera={cameras[0]} onScan={console.log}>
                    <video style={{width: 400, height: 400}}/>
                </Scanner>
            </div>
        )}
    </Cameras>
