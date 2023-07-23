"use client";

import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface CardDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CardDetail = ({ isOpen, closeModal, car }: CardDetailProps) => {
  return (
    <div>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel
                className="relative flex flex-col gap-5 max-w-lg w-full max-h-[90vh] rounded-3xl
                 p-6 bg-white text-left overflow-y-auto shadow-xl"
              >
                <AiOutlineCloseCircle
                  className="absolute top-2 right-2 w-fit text-3xl cursor-pointer z-10"
                  onClick={closeModal}
                />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex gap-3">
                    <div className="relative flex-1 w-full h-24 bg-sky-50 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "43")}
                        fill
                        priority
                        className="object-contain"
                        alt="model"
                      />
                    </div>
                    <div className="relative flex-1 w-full h-24 bg-blue-50 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        fill
                        priority
                        className="object-contain"
                        alt="model"
                      />
                    </div>
                    <div className="relative flex-1 w-full h-24 bg-sky-50 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "13")}
                        fill
                        priority
                        className="object-contain"
                        alt="model"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-4 ">
                    {Object.entries(car).map(([key, value]) => (
                      <div className="flex justify-between w-full gap-5 text-right">
                        <p className="capitalize text-sm font-medium">
                          {key.split("_").join(" ")}
                        </p>
                        <p className="font-semibold text-sm text-black">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CardDetail;
