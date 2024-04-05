'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const newIssuesPage = () => {
   return (
      <div className='max-w-xl space-y-3'>
         <TextField.Root placeholder='New Issues'>
         </TextField.Root>
         <TextArea placeholder='Description' />
         <Button>Submit new issues</Button>
      </div>
   )
}

export default newIssuesPage