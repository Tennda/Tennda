'use client'
import Image from "next/image";
import { Button, ButtonGroup } from '@chakra-ui/react'
export default function Home() {
  return (
    <div className="">
      Tendda
      <Button colorScheme='blue'>Button</Button>
       <Button colorScheme='teal' variant='solid'>
    Button
      </Button>
      
  <Button className=" text-[red]" colorScheme='#FF0000' color='#FF0000' backgroundColor='blue' variant='outline'>
    Button tailwind
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='link'>
    Button
  </Button>
    </div>
  );
}
