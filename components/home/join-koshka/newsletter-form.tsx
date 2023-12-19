'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const NewsletterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    alert(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex 2xsmall:flex-wrap'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='xsmall:flex-1 w-auto 2xsmall:w-full'>
                <FormControl>
                  <Input
                    placeholder='Email'
                    {...field}
                    className='rounded-sm  font-sans xsmall:h-[50px] xsmall:text-2xl 2xsmall:h-[35px] text-xs'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='text-2xl border-[1px] border-solid border-[#D6D6D6] xsmall:ml-[-15px] xsmall:rounded-sm xsmall:h-[50px] xsmall:w-auto xsmall:mt-0  2xsmall:w-full 2xsmall:rounded-full h-[35px] ml-0 mt-3'>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsletterForm;
