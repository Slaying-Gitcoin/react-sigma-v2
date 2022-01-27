import React from "react";
import { FA2LayoutSupervisorParameters } from "graphology-layout-forceatlas2/worker";
import { WorkerLayoutControlProps } from "./WorkerLayoutControl";
export declare type ForceAtlasControlProps = Omit<WorkerLayoutControlProps<FA2LayoutSupervisorParameters>, "layout" | "settings"> & {
    settings?: FA2LayoutSupervisorParameters;
};
export declare const ForceAtlasControl: React.FC<ForceAtlasControlProps>;
