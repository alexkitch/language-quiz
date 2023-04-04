import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from '@components/Home'

const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="w-8/12 mx-auto h-screen flex flex-col items-center justify-center">
                <div className="border border-sky-200 bg-white text-sky-500 w-[512px] min-h-[512px] flex flex-col items-center justify-center">
                    <Home />
                </div>
            </div>
        </QueryClientProvider>
    )
}
