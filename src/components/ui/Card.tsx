import { Beer, Martini, Milk, TestTube } from 'lucide-react'
import type { FC, JSX } from 'react'

import { ItemType } from '@/types/items'

interface CardProps {
  title: string
  type: ItemType
}

const Card: FC<CardProps> = ({ title, type }) => {
  const iconClassName = 'w-20 h-20 text-white'
  let icon: JSX.Element | null = null

  if (type === ItemType.DRINK) {
    icon = <Martini className={iconClassName} />
  } else if (type === ItemType.BEER) {
    icon = <Beer className={iconClassName} />
  } else if (type === ItemType.SODA) {
    icon = <Milk className={iconClassName} />
  } else {
    icon = <TestTube className={iconClassName} />
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 border-white border-1 p-8 rounded-lg shadow-l">
      <h2 className="text-white text-2xl">{title}</h2>
      {icon}
    </div>
  )
}

export default Card
