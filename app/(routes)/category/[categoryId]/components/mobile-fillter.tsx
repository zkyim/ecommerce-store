"use client";
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/icon-button';
import { Color, Size } from '@/types';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import React, { useState } from 'react'
import Fillter from './fillter';

interface MobileFillter {
    colors: Color[];
    sizes: Size[];
}

const MobileFillter = ({colors, sizes}: MobileFillter) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Fillters
        <Plus size={20}/>
      </Button>

      <Dialog open={open} as='div' onClose={onClose} className={"relative z-40 lg:hidden"}>
        <div className='fixed inset-0 bg-black bg-opacity-25'>
          <Dialog.Panel className={"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl px-4"}>
            <div className='flex  items-center justify-end px-4'>
                <IconButton icon={<X size={15} />} onClick={onClose}/>
            </div>
            <div className='py-4'>
                <Fillter 
                    valueKey="sizeId"
                    name="Sizes"
                    data={sizes}
                />
                <Fillter 
                    valueKey="colorId"
                    name="Colors"
                    data={colors}
                />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFillter
