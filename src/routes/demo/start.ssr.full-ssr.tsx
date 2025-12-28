import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const getPunkSongs = createServerFn({
  method: 'GET',
}).handler(() => [
  { id: 1, name: 'Teenage Dirtbag', artist: 'Wheatus' },
  { id: 2, name: 'Smells Like Teen Spirit', artist: 'Nirvana' },
  { id: 3, name: 'The Middle', artist: 'Jimmy Eat World' },
  { id: 4, name: 'My Own Worst Enemy', artist: 'Lit' },
  { id: 5, name: 'Fat Lip', artist: 'Sum 41' },
  { id: 6, name: 'All the Small Things', artist: 'blink-182' },
  { id: 7, name: 'Beverly Hills', artist: 'Weezer' },
])

export const Route = createFileRoute('/demo/start/ssr/full-ssr')({
  component: RouteComponent,
  loader: async () => await getPunkSongs(),
})

function RouteComponent() {
  const punkSongs = Route.useLoaderData()

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-black p-4 text-white"
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 20% 60%, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-2xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10">
        <h1 className="text-3xl font-bold mb-6 text-cyan-400">
          Full SSR - Punk Songs
        </h1>
        <ul className="space-y-3">
          {punkSongs.map(
            (song: { id: number; name: string; artist: string }) => (
              <li
                key={song.id}
                className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm shadow-md"
              >
                <span className="text-lg text-white font-medium">
                  {song.name}
                </span>
                <span className="text-white/60"> - {song.artist}</span>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}
