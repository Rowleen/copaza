import { createFileRoute } from '@tanstack/react-router'

import type { ItemType } from '@/types/items'
import Card from '@/components/ui/Card'

import consumption from '@/data/consumption.json'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="w-[800px] grid grid-cols-2 gap-6">
        {consumption.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.consumption}
              type={item.type as unknown as ItemType}
            />
          )
        })}
      </div>
    </section>
  )
}
