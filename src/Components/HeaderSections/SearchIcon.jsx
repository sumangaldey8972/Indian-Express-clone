import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    useDisclosure,
    FormControl,
    FormLabel
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { SearchIcon, CloseIcon } from "@chakra-ui/icons"
function Search() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [focus, setFocus] = useState(true);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Button onClick={onOpen} bg="" color="white" borderRadius="none" colorScheme='transparent' > <SearchIcon /> </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent top="28%" >
                    <ModalBody pb={6}>
                        <div style={{display:"flex", gap:"4px"}} >
                        <FormControl>
                            <Input border="none" focusBorderColor='black' borderRadius="none" placeholder='Search Here..' onFocus={focus} />
                        </FormControl>
                            <Button color="black" colorScheme="white" >
                                <SearchIcon/>
                            </Button>
                            </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} colorScheme="white" color="black" ml={5} > <CloseIcon/> </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Search