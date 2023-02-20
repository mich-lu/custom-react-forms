import React from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { grades } from '@/sampleData/grades';
import Input from '@/components/Input';
import Select from '@/components/Select';
import MultiselectWithChip from '@/components/MultiselectWithChip';
import Checkbox from '@/components/Checkbox';
import Toggle from '@/components/Toggle';
import Radiogroup from '@/components/Radiogroup';

export enum Gender {
  male ='Male',
  female ='Female',
  other = 'Other'
}

const UserInviteSchema= z.object({
  name: z.string().min(1, {message: 'User name required'}),
  grade: z.object({
    id : z.number(),
    name : z.string()}, {
        required_error: 'Please select a grade', //custom error message
      }),
  activities: z.array(z.object({
    id : z.number(),
    name : z.string()}),  {
        required_error: 'Please select at least 1 activity',
  }),
  height: z.string().min(1, { message: 'Please enter height' }),
  gender: z.nativeEnum(Gender),
  terms: z.boolean().refine((value)=> value === true, {message : 'Required'}),
  notifications: z.boolean(),
})

type UserInvite = z.infer<typeof UserInviteSchema>

export default function Home() {

  const { register, handleSubmit, formState: { errors,  }, control } = useForm<UserInvite>({ resolver: zodResolver(UserInviteSchema) });
  const onSubmit: SubmitHandler<UserInvite> = data => 
  { console.log(data) };


  return (
    <>
      <div className="w-50 justify-center">
              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
                  <Input label='Name' {...register("name") } error={errors?.name?.message} />
                  <Controller
                    name='grade'
                    control={control}
                    render={({field}) => <Select field={field} label= 'Select Grade' options={grades} error={errors?.grade?.message}/>}/>
                  <Controller
                      name='activities'
                      control={control}
                      render={({field}) => <MultiselectWithChip field={field} options={grades} label={'Select Activities'} error={errors?.activities?.message}/>}/>
                  <Input type='number' min='0' label='Height in cm' {...register("height") } error={errors?.height?.message} />
                  <Radiogroup name='gender' label='Gender' options={Object.values(Gender)} control={control} error={errors?.gender?.message}/>
                  <Checkbox label='I agree' {...register('terms')} error={errors?.terms?.message}/>
                 <Controller
                      name='notifications'
                      control={control}
                      render={({field}) => <Toggle field={field} label={'Turn on notifications'}/>}/>
                  <div>
                    <button className='btn' type="submit">
                      Submit
                    </button>
                  </div>
                  </form>
                </div>
              </div>
          </div>
    </>
  )
}
