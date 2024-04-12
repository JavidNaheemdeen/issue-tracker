'use client';

import { Select } from '@radix-ui/themes'
import React from 'react'

const AssigneeSelect = () => {
   return (
      <Select.Root>
         <Select.Trigger placeholder='Assign'/>
            <Select.Content>
               <Select.Group>
                  <Select.Label>Assignee</Select.Label>
                  <Select.Item value='1'>Javid</Select.Item>
               </Select.Group>
            </Select.Content>
      </Select.Root>
   )
}

export default AssigneeSelect