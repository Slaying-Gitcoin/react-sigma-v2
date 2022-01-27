import React, { CSSProperties, ReactNode } from "react";
import { GraphOptions } from "graphology-types";
import { Settings } from "sigma/settings";
export interface SigmaContainerProps {
    graphOptions?: Partial<GraphOptions>;
    initialSettings?: Partial<Settings>;
    id?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
export declare const SigmaContainer: React.FC<SigmaContainerProps>;
