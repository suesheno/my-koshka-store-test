import {petInfoType} from "@/types/profiles";
import Image from "next/image";
import {TwicImg} from "@twicpics/components/react";

const PetHeader = ({ petInfo }: { petInfo: petInfoType } ) => {
    return (
        <div className="relative flex justify-between gap-x-6 px-4 py-3 hover:bg-koshkaGreen/10 sm:px-6">
            <div className="flex min-w-0 gap-x-4">
                <div className="h-12 w-12 relative flex-none rounded-2xl bg-gray-50">
                    <TwicImg
                        src={petInfo!.image!.url.substring(petInfo!.image!.url.lastIndexOf("/") + 1)}
                        alt={'Pet Image'}
                        className='"object-cover rounded-2xl w-full h-full'
                        mode="cover"
                        refit
                        ratio="none"
                        focus="auto"
                    />
                </div>
                <div className="min-w-0 flex-auto">
                    <div className="text-sm flex font-semibold leading-6 text-gray-900">
                        {petInfo.name}
                    </div>
                    <div className="mt-1 flex text-xs leading-5 text-gray-500">
                        {petInfo.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetHeader;