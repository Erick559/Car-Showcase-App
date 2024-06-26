import { Fragment } from 'react'
import { Dialog,Transition } from '@headlessui/react'

import { CarProps } from '@/types'
import Image from 'next/image'
import { fetchCarImages } from '@/utils'

interface CarDetailsProps {
    isOpen:boolean,
    closeModal:()=>void,
    car:CarProps
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
   <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter='easeInOut duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                    as={Fragment}
                    enter='easeInOut duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel
                            className='relative w-full max-w-lg max-h-[90vh overflow-y-auto transform rounded-2xl p-6 bg-white text-left shadow-xl transition-all flex flex-col gap-5]'
                        >
                            <button type='button' onClick={closeModal} className='absolute top-2 right-2 rounded-full bg-primary-blue-100 z-10 w-fit p-2'>
                                <Image src='/close.svg' alt='Close button to close the modal' width={20} height={20}  className='object-contain'/>
                            </button>

                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='relative w-full h-24 bg-pattern bg-center rounded-lg'>
                                    <Image src={fetchCarImages(car)} alt='car model' fill priority className='object-contain'/>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                        <Image src={fetchCarImages(car,'29')} alt='car model' fill priority className='object-contain'/>
                                    </div>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                        <Image src={fetchCarImages(car,'33')} alt='car model' fill priority className='object-contain'/>
                                    </div>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                        <Image src={fetchCarImages(car,'13')} alt='car model' fill priority className='object-contain'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 flex flex-col'>
                                <h1 className='font-semibold capitalize text-xl'>{car.make} {car.model}</h1>
                                <div className='mt-3 flex flex-col flex-wrap gap-4'>
                                    {Object.entries(car).map(([key, value]) => (
                                        <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                            <h4 className='text-grey capitalize'>{key.split('_').join(' ')}</h4>
                                            <p className='capitalize text-black-100 font-semibold'>{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
   </>
  )
}

export default CarDetails
