import { lazy, Suspense } from "react";
import Fallback from "./Fallback";

const lazyFn = (importFn: any, access = true) => {
  if(!access) {
    return () => <Fallback/>
  }

  const LazyComponent = lazy(importFn)

  return () => (
    <Suspense fallback={<>Loading...</>}>
      <LazyComponent />
    </Suspense>
  );
};

export default lazyFn;