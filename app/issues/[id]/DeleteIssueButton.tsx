'use client';

import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
   const router = useRouter();

   const [error, setError] = useState(false);
   const [isDeleting, setDeleting] = useState(false);

   const deleteIssue = async () => {
      try {
         setDeleting(true);
         await axios.delete('/api/issues/' + issueId);
         router.push('/issues/list');
         router.refresh();
      } catch (error) {
         setDeleting(false)
         setError(true)
      }
   }

   return (
      <>
         <AlertDialog.Root>
            <AlertDialog.Trigger>
               <Button color="red" disabled={isDeleting}>
                  Delete Issues
                  {isDeleting && <Spinner />}
               </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
               <AlertDialog.Title>Cancel deletion</AlertDialog.Title>
               <AlertDialog.Description size="2">
                  Are you sure? This application will no longer be accessible and any
                  existing sessions will be expired.
               </AlertDialog.Description>

               <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                     <Button variant="soft" color="gray">
                        Cancel
                     </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                     <Button onClick={deleteIssue} variant="solid" color="red">
                        Delete issue
                     </Button>
                  </AlertDialog.Action>
               </Flex>
            </AlertDialog.Content>
         </AlertDialog.Root>

         <AlertDialog.Root open={error}>
            <AlertDialog.Content>
               <AlertDialog.Title>Error</AlertDialog.Title>
               <AlertDialog.Description>
                  This issue could not be deleted
               </AlertDialog.Description>
               <Button color="gray" variant="soft" mt='5' onClick={() => setError(false)}>OK</Button>
            </AlertDialog.Content>
         </AlertDialog.Root></>
   )
}

export default DeleteIssueButton