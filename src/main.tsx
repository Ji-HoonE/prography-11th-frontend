import { createRoot } from 'react-dom/client'
import './index.css'
import { Providers } from './app/providers/index.tsx'
import { router } from './app/router.tsx'
import { queryClient } from './shared/query-client.ts'

createRoot(document.getElementById('root')!).render(
  <Providers router={router} client={queryClient} />
)
