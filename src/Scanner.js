import React from 'react';
import {Camera} from "instascan";

export default () => {
    Camera.getCameras().then(cameras => console.log(cameras));
    return <div/>;
}
