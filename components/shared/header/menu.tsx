//import Link from "next/link"
import { EllipsisVertical } from 'lucide-react'
import CartButton from './cart-button'

import ThemeSwitcher from './theme-switcher'
import UserButton from './user-button'
//

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
export default function Menu({ forAdmin = false }: { forAdmin?: boolean }) {
  return (
    <div className='flex justify-end'>
      {/* <ModeToggle /> */}
      <nav className='flex gap-3 w-full'>
        <ThemeSwitcher />
        <UserButton />
        {forAdmin ? null : <CartButton />}
      </nav>

      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle header-button'>
            <EllipsisVertical className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent className='bg-black text-white  flex flex-col items-start  '>
            <SheetHeader className='w-full'>
              <div className='flex items-center justify-between '>
                <SheetTitle>Site Menu</SheetTitle>
                <SheetDescription></SheetDescription>
              </div>
            </SheetHeader>
            <ThemeSwitcher />
            <UserButton />
            <CartButton />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}
