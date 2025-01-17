import NoverlapLayout, { NoverlapLayoutSupervisorParameters } from "graphology-layout-noverlap/worker";
import { useWorkerLayoutFactory, LayoutWorkerHook } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {stop, start} = useLayoutCircular({layoutOptions});
 *```
 * @category Hook
 */
export const useWorkerLayoutNoverlap: LayoutWorkerHook<NoverlapLayoutSupervisorParameters> = useWorkerLayoutFactory<
  NoverlapLayoutSupervisorParameters
>(NoverlapLayout);
