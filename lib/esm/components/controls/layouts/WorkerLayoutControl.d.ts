import { ReactNode, CSSProperties } from "react";
import { LayoutWorkerHook } from "../../../hooks/layouts/worker";
export interface WorkerLayoutControlProps<T> {
    id?: string;
    className?: string;
    style?: CSSProperties;
    layout: LayoutWorkerHook<T>;
    settings: T;
    autoRunFor?: number;
    customStartLayout?: ReactNode;
    customStopLayout?: ReactNode;
}
export declare function WorkerLayoutControl<T>({ id, className, style, layout, settings, autoRunFor, customStartLayout, customStopLayout, }: WorkerLayoutControlProps<T>): JSX.Element;
