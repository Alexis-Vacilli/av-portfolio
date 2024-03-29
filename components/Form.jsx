"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {User, MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react'

const Form = () => {
  return <form className='flex flex-col gap-y-5  p-5 rounded-sm'>
    <div className='relative flex items-center'>
      <Input type='name' id='name' placeholder='Name' />
      <User className='absolute right-6' size={20} />
    </div>
    <div className='relative flex items-center'>
      <Input type='email' id='email' placeholder='Email' />
      <MailIcon className='absolute right-6' size={20} />
    </div>
    <div className='relative flex items-center'>
      <Textarea type='message' id='message' placeholder='Message' />
      <MessageSquare className='absolute right-6 top-4' size={20} />
    </div>
    <Button className='flex items-center max-w-[146px] py-3 rounded-sm text-foreground font-semibold bg-background dark:bg-background border-2 border-input hover:bg-accent dark:hover:bg-accent '>Let's Talk</Button>
  </form>
};

export default Form;
