"use client";

import {ChangeEvent, useEffect, useState} from "react";

import {petInfoType} from "@/types/profiles";
import {IDisease} from "@/types/diseases";
import {CheckIcon, PencilIcon, XMarkIcon} from '@heroicons/react/20/solid';
import {SwitchCtrl, SwitchToggle} from "@/components/ui/switch";
import {ComboField, TextField} from "@/components/ui/formFields";

const PetDetail = ({ petInfo }: { petInfo: petInfoType } ) => {
    const [edit, setEdit] = useState(false);
    const [vacinated, setVacinated] = useState(petInfo.vaccinated);
    const [neutered, setNeutered] = useState(petInfo.sterilized);
    const [formData, setFormData] = useState({
        ...petInfo,
        diseases: petInfo.diseases?.map((d, idx) => (
            {
                set: idx,
                disease: {
                    id: d.disease.id,
                },
                vetConfirmed: d.vetConfirmed,
            }
        ))
    });
    const [dissese, setDissese] = useState(petInfo.diseases!.map((e ): string => ( e.disease?.code )))
    const [disseseList, setDisseseList] = useState([{id: 0, key: 'NONE', text:'None', enabled: true}])

    useEffect(() => {
        fetch('/api/diseases', {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                setDisseseList(data.data.map((d: IDisease) => (
                    {
                        id: d.id,
                        key: d.attributes.code,
                        text: d.attributes.name,
                        enabled: true
                    }
                )))
            })
    }, [])

    const getActiveLabel = () => {
        if ( petInfo!.tags!.length < 1 ) return "None"
        return  (petInfo!.tags!.filter(( t ) => {
            return t.active
        }))[0].tag
    }
    const edithRecord = () => {
        setEdit(true)
    }
    const saveRecord = async () => {
        formData.vaccinated = vacinated
        formData.sterilized = neutered
        formData.diseases = dissese.map((m, idx) => {
            const thisD = disseseList.filter((d) => d.key === m)[0]

            const vet = petInfo.diseases?.filter((v) => v.disease.code === m)
            return {
                set: idx,
                disease: {
                    id: thisD.id,
                },
                vetConfirmed: vet === undefined ? false : vet[0].vetConfirmed,
            }
        });

        await fetch('/api/pets', {
            method: "PUT",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        });
        setEdit(false)
    }
    const cancelRecord = () => {
        setVacinated(formData.vaccinated)
        setNeutered(formData.sterilized)
        setEdit(false)
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    return (
        <div className="relative w-auto justify-between gap-x-6 px-4 py-3 sm:px-6">
            <div className='h-8 w-8 float-right cursor-pointer text-gray-700'>
                { edit ? <><CheckIcon className='text-green-700' onClick={saveRecord} /><XMarkIcon className='text-red-700' onClick={cancelRecord} /></> : <PencilIcon className='h-6 w-6' onClick={edithRecord} /> }
            </div>
            <form className="flex min-w-0 gap-x-4">
                <input type='hidden' name="profile" id="profile" value={petInfo.profile.id} />
                <input type='hidden' name="contact" id="contact" value={petInfo.contact} />
                <div className="min-w-0 block object-center">
                    <div className='items-center pb-2 pr-2'>
                        <TextField id='tag' label='Active Tag' placeholder='C0000000' onChange={handleInputChange} enabled={false} defaultValue={getActiveLabel()} />
                    </div>
                    <div className="grid grid-rows-12 grid-cols-2 md:grid-cols-none md:grid-rows-2 text-sm leading-6 text-gray-900">
                        <div className='grid grid-rows-1 grid-cols-2 items-center gap-x-4 mb-2 mr-3'>
                            <SwitchCtrl styling='flex'>
                                <SwitchToggle edit={edit}
                                              label='Vacinated'
                                              value={vacinated}
                                              onToggle={() => setVacinated(!vacinated)}
                                              swtLabelStyle='flex-none pr-6 font-medium text-gray-900 sm:w-64'
                                              swtStyle={vacinated ? 'bg-koshkaGreen' : 'bg-gray-200'}
                                              toggleStyle={vacinated ? 'translate-x-3.5' : 'translate-x-0'}
                                />
                            </SwitchCtrl>
                            <SwitchCtrl styling='flex'>
                                <SwitchToggle edit={edit}
                                              label='Neutered'
                                              value={neutered}
                                              onToggle={() => setNeutered(!neutered)}
                                              swtLabelStyle='flex-none pr-6 font-medium text-gray-900 sm:w-64'
                                              swtStyle={neutered ? 'bg-koshkaGreen' : 'bg-gray-200'}
                                              toggleStyle={neutered ? 'translate-x-3.5' : 'translate-x-0'}
                                />
                            </SwitchCtrl>
                        </div>
                        <div className='items-center mb-2 mr-3'>
                            <TextField id='age' label='Date of Birth (Age)' placeholder='2020-01-01' onChange={handleInputChange} enabled={edit} defaultValue={petInfo.age == undefined ? 'Unknown' : petInfo.age} />
                        </div>
                        <div className='items-center my-2 mr-3'>
                            <TextField id='cityLicense' label='City Licence' placeholder='C0000000' onChange={handleInputChange} enabled={edit} defaultValue={petInfo.cityLicense == undefined ? 'None' : petInfo.cityLicense} />
                        </div>
                        <div className='items-center my-2 mr-3'>
                            <TextField id='microchip' label='Microchip' placeholder='C0000000' onChange={handleInputChange} enabled={edit} defaultValue={petInfo.microchip == undefined ? 'None' : petInfo.microchip} />
                        </div>
                        <div className='grid grid-rows-1 grid-cols-2 items-center pb-2 pr-2 col-span-2 lg:col-span-1'>
                            <ComboField id='diseases' label='Diseases' value={dissese} enabled={edit} onChange={(v) => setDissese(v)} options={disseseList} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PetDetail;