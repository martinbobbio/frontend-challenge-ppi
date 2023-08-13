// React
import { useState } from 'react';
// Components
import { EmptyState } from '@/components';
// Constants
import { CONFIG } from '@/constants';
// Libreries
import { SWRConfig, SWRConfiguration } from 'swr';

// Component props
interface SWRWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render high oirder component swr wrapper and their logic.
 *
 * @return React.ReactElement <SWRWrapper/>
 */
const SWRWrapper = ({ children }: SWRWrapperProps) => {
  const [error, setError] = useState(false);
  const swrOptions: SWRConfiguration = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    onError: () => setError(true),
  };

  if (error) return <EmptyState {...CONFIG.emptyStates.error} />;

  return <SWRConfig value={swrOptions}>{children}</SWRConfig>;
};

export default SWRWrapper;
