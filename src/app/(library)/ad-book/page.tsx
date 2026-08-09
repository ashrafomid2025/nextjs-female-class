import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

function page() {
  return (
    <div className='w-full min-h-screen flex bg-stone-600 justify-center items-center'>
      <div className='w-full max-w-4xl mx-auto'>
        <Card>
          <CardHeader>
            <CardTitle>Add new book</CardTitle>
            <CardDescription>
              You can add a new book for yourself
            </CardDescription>
          </CardHeader>
          <CardContent className='w-ful grid grid-cols-2 gap-2'>
            <Input type='text' placeholder='Book title'></Input>
            <Input type='text' placeholder='Book isbn'></Input>
          </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default page