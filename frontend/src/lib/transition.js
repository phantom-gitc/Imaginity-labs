import { createContext, useContext } from 'react'

/** Route-change context: `go(path)` plays the colour-panel wipe, then navigates. */
export const TransitionContext = createContext({ go: () => {} })
export const useTransitionNav = () => useContext(TransitionContext)
