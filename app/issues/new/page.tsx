'use client';

import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const newIssuesPage = () => {
   return (
      <div className='max-w-xl space-y-3'>
         <TextField.Root placeholder='New Issues'>
         </TextField.Root>
         <SimpleMDE placeholder='Description' />
         <Button>Submit new issues</Button>
      </div>
   )
}

export default newIssuesPage